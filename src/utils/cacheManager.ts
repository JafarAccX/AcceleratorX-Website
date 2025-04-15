import { CachedData } from '../pages/admin/types/analytics';

const CHUNK_SIZE = 500 * 1024; // 500KB chunks
const CACHE_PREFIX = 'analytics_cache_';
const CACHE_INDEX_KEY = 'analytics_cache_index';

// LZ-String for compression
const LZString = {
  compress: (input: string): string => {
    if (input === null) return '';
    const bitsPerChar = 16;
    const getCharFromInt = (value: number): string => String.fromCharCode(value);
    const dictionary: { [key: string]: number } = {};
    const uncompressed = input;
    const result: number[] = [];
    let enlargeIn = 2;
    let dictSize = 3;
    let numBits = 2;
    let data = 0;
    let dataBits = 0;

    for (let i = 0; i < uncompressed.length; i++) {
      const c = uncompressed.charAt(i);
      if (!dictionary[c]) dictionary[c] = dictSize++;
      const cc = c;
      if (dictionary[cc] !== undefined) {
        data = (data << numBits) | dictionary[cc];
        dataBits += numBits;
        while (dataBits >= bitsPerChar) {
          result.push(data >> (dataBits - bitsPerChar));
          data &= (1 << (dataBits - bitsPerChar)) - 1;
          dataBits -= bitsPerChar;
        }
      }
      if (--enlargeIn === 0) {
        enlargeIn = 1 << numBits;
        numBits++;
      }
    }
    if (dataBits > 0) {
      result.push(data << (bitsPerChar - dataBits));
    }
    return result.map(getCharFromInt).join('');
  },

  decompress: (input: string): string => {
    if (input === null || input === '') return '';
    const bitsPerChar = 16;
    const getNextValue = (index: number): number => input.charCodeAt(index);
    const dictionary: string[] = [];
    let enlargeIn = 4;
    let dictSize = 4;
    let numBits = 3;
    let entry = '';
    const result: string[] = [];
    let data = getNextValue(0);
    let dataBits = bitsPerChar;
    let dataIndex = 1;

    for (let i = 0; i < 3; i++) {
      dictionary[i] = String(i);
    }

    while (dataIndex < input.length) {
      let bits = 0;
      let maxPower = Math.pow(2, numBits);
      let power = 1;

      while (power !== maxPower) {
        const resb = data & ((1 << dataBits) - 1);
        data >>= dataBits;
        dataBits -= bitsPerChar;
        if (dataBits <= 0) {
          data = getNextValue(dataIndex++);
          dataBits += bitsPerChar;
        }
        bits |= (resb > 0 ? 1 : 0) * power;
        power <<= 1;
      }

      const c = String.fromCharCode(bits);
      dictionary[dictSize++] = c;
      result.push(c);

      if (--enlargeIn === 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }
    }

    return result.join('');
  }
};

export class CacheManager {
  static async setCache(key: string, data: CachedData): Promise<void> {
    try {
      // First, clean up old chunks
      this.cleanupOldChunks();

      // Compress the data
      const serializedData = JSON.stringify(data);
      const compressedData = LZString.compress(serializedData);

      // Split into chunks
      const chunks: string[] = [];
      for (let i = 0; i < compressedData.length; i += CHUNK_SIZE) {
        chunks.push(compressedData.slice(i, i + CHUNK_SIZE));
      }

      // Store chunk information
      const chunkKeys = chunks.map((_, index) => `${CACHE_PREFIX}${key}_${index}`);
      const index = {
        key,
        chunkKeys,
        timestamp: Date.now(),
        totalSize: compressedData.length
      };

      // Store chunks
      chunks.forEach((chunk, i) => {
        localStorage.setItem(chunkKeys[i], chunk);
      });

      // Store index
      localStorage.setItem(CACHE_INDEX_KEY, JSON.stringify(index));
    } catch (error) {
      console.warn('Error setting cache:', error);
      throw error;
    }
  }

  static async getCache(key: string): Promise<CachedData | null> {
    try {
      const indexStr = localStorage.getItem(CACHE_INDEX_KEY);
      if (!indexStr) return null;

      const index = JSON.parse(indexStr);
      if (index.key !== key) return null;

      // Check if cache is expired (3 days)
      if (Date.now() - index.timestamp > 3 * 24 * 60 * 60 * 1000) {
        this.cleanupOldChunks();
        return null;
      }

      // Reconstruct data from chunks
      let compressedData = '';
      for (const chunkKey of index.chunkKeys) {
        const chunk = localStorage.getItem(chunkKey);
        if (!chunk) {
          this.cleanupOldChunks();
          return null;
        }
        compressedData += chunk;
      }

      // Decompress and parse
      const decompressedData = LZString.decompress(compressedData);
      return JSON.parse(decompressedData);
    } catch (error) {
      console.warn('Error getting cache:', error);
      return null;
    }
  }

  static cleanupOldChunks(): void {
    try {
      const keys = Object.keys(localStorage);
      const now = Date.now();

      // Remove old index and its chunks
      const indexStr = localStorage.getItem(CACHE_INDEX_KEY);
      if (indexStr) {
        const index = JSON.parse(indexStr);
        if (now - index.timestamp > 3 * 24 * 60 * 60 * 1000) {
          index.chunkKeys.forEach((chunkKey: string) => {
            localStorage.removeItem(chunkKey);
          });
          localStorage.removeItem(CACHE_INDEX_KEY);
        }
      }

      // Remove any orphaned chunks
      keys.forEach(key => {
        if (key.startsWith(CACHE_PREFIX) && !indexStr) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('Error cleaning up cache:', error);
    }
  }
} 