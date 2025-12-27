import React, { useEffect, useRef, useState } from "react";
import { AlertCircle, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface VintageTVProps {
  videoSrc: string;
}

const getYouTubeVideoId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

const getVimeoVideoId = (url: string): string | null => {
  const regExp = /(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const getEmbedUrl = (url: string, origin: string): string => {
  const youtubeId = getYouTubeVideoId(url);
  if (youtubeId) {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&loop=1&playlist=${youtubeId}&controls=0&mute=1&enablejsapi=1&origin=${origin}&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1`;
  }

  const vimeoId = getVimeoVideoId(url);
  if (vimeoId) {
    return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&background=1&muted=1`;
  }

  return "";
};

export const VintageTV: React.FC<VintageTVProps> = ({ videoSrc }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const tvContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const youtubeId = getYouTubeVideoId(videoSrc);
    const vimeoId = getVimeoVideoId(videoSrc);

    if (!youtubeId && !vimeoId) {
      setError("Invalid video URL. Please provide a valid YouTube or Vimeo URL");
      setIsLoading(false);
      return;
    }

  if (youtubeId && !("YT" in window)) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

  // No-op: was used for isFullscreen state, now removed
  const handleFullscreenChange = () => {};

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [videoSrc]);

  const handleMuteToggle = () => {
    if (!iframeRef.current) return;
    const iframe = iframeRef.current;
    
    if (getYouTubeVideoId(videoSrc)) {
      const message = isMuted ? "unMute" : "mute";
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"' + message + '","args":""}',
        "*"
      );
    } else if (getVimeoVideoId(videoSrc)) {
      const message = {
        method: isMuted ? "setVolume" : "setVolume",
        value: isMuted ? "1" : "0"
      };
      iframe.contentWindow?.postMessage(JSON.stringify(message), "*");
    }
    setIsMuted(!isMuted);
  };

  const handleFullscreen = async () => {
    if (!tvContainerRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await tvContainerRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const embedUrl = getEmbedUrl(videoSrc, window.location.origin);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <div
        ref={tvContainerRef}
        className="tv-container relative w-full max-w-4xl aspect-video transition-all duration-500"
      >
        {/* TV Frame */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-[2px] rounded-2xl">
            <div className="absolute inset-0 bg-black rounded-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {/* Ambient Light Effect */}
                <div className="absolute inset-0 opacity-50">
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl animate-pulse-slow" />
                  <div className="absolute inset-0 bg-purple-500/20 blur-xl animate-pulse-slow delay-2000" />
                </div>

                {/* Video Container */}
                <div className="relative w-full h-full">
                  {embedUrl && (
                    <iframe
                      ref={iframeRef}
                      className="w-full h-full"
                      src={embedUrl}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => setIsLoading(false)}
                    />
                  )}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-500 opacity-100">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                  )}
                  {error && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 transition-opacity duration-500 opacity-100">
                      <div className="text-center text-white">
                        <AlertCircle className="w-8 h-8 mx-auto mb-2 text-red-500" />
                        <p>{error}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent transition-all duration-500">
                  <button
                    onClick={handleMuteToggle}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition duration-200 transform hover:scale-110 active:scale-90"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-white" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-white" />
                    )}
                  </button>

                  <button
                    onClick={handleFullscreen}
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition duration-200 transform hover:scale-110 active:scale-90"
                  >
                    <Maximize2 className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Screen Reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* LED Status Light */}
        <div className="absolute bottom-2 right-4 flex items-center gap-2">
          <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
        </div>
  </div>
    </div>
  );
};
