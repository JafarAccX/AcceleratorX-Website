const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, '../src/utils/constants.ts');
const targetDir = path.join(__dirname, '../src/data');
let content = fs.readFileSync(srcFile, 'utf-8');

content = content.replace(/import .*?;\n/g, '');

const parts = content.split(/^export const /m);

const extractedObj = {};
for (let i=1; i<parts.length; i++) {
  const part = parts[i];
  const nameMatch = part.match(/^(\w+)/);
  if (nameMatch) {
    const name = nameMatch[1];
    extractedObj[name] = 'export const ' + part.trim();
  }
}

const fileMap = {
  stats: ['stats', 'avatars'],
  modules: ['modules', 'dataAnalyticsmodules'],
  tools: ['tools', 'dataAnalyticsTools', 'noCodetools'],
  skills: ['skills', 'dataAnalyticsSkills'],
  mentors: ['mentors', 'dataAnalyticsMentors'],
  'weekly-data': ['weeklyData'],
  blogs: ['blogs']
};

const fileImports = {
  tools: `import { Tool } from "../utils/types";\n\n`,
  skills: `import { Skill } from "../utils/types";\n\n`,
  blogs: `import { Blog } from "../utils/types";\n\n`
};

let indexExport = '';

for (const [file, names] of Object.entries(fileMap)) {
  let fileContent = fileImports[file] || '';
  for (const name of names) {
    if (extractedObj[name]) {
      fileContent += extractedObj[name] + '\n\n';
    } else {
      console.log(`Missing: ${name}`);
    }
  }
  
  const targetPath = path.join(targetDir, `${file}.ts`);
  fs.writeFileSync(targetPath, fileContent.trim() + '\n');
  console.log(`Wrote ${targetPath}`);
  
  indexExport += `export * from "./${file}";\n`;
}

fs.writeFileSync(path.join(targetDir, 'index.ts'), indexExport);
console.log('Wrote index.ts');

const newConstants = `export * from "../data";\n`;
fs.writeFileSync(srcFile, newConstants);
console.log('Updated constants.ts');
