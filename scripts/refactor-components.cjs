const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');
const componentsDir = path.join(srcDir, 'components');

const config = {
  layout: ['Footer.tsx', 'Sidebar.tsx', 'HeaderEIE.tsx', 'ScrollToTop.tsx', 'ThemeToggle.tsx', 'AppRoutes.tsx'],
  ui: ['CTA.tsx', 'PricingCard.tsx', 'SaleBanner.tsx', 'FeatureCards.tsx', 'ContentSection.tsx', 'ProgramTabs.tsx', 'Loader.tsx', 'Spotlight.tsx'],
  sections: ['FAQ.tsx', 'Stats.tsx', 'HeroWithAbouv.tsx', 'AnimatedTestimonials.tsx', 'ThankYouPage.tsx', 'StickyBookNav.tsx'],
  modals: ['EnrollmentModal.tsx', 'BookASession.tsx', 'AppDownloadPOP.tsx'],
  widgets: ['CountdownTimer.tsx', 'Timer.tsx', 'TimeUnit.tsx', 'OtpTimer.tsx', 'ElevenLabsWidget.tsx'],
  seo: ['SEO.tsx', 'MetaPixel.tsx', 'MetaTrackingDebugger.tsx', 'GoogleTranslate.tsx'],
  animations: ['VintageTV.tsx', 'StarField.tsx', 'NeuralNetworkAnimation.tsx', 'JetAnimation.css'],
};

// Flatten map: FileName -> Category (e.g. 'Footer.tsx' -> 'layout')
const fileMap = {};
const nameMap = {}; // 'Footer' -> 'layout' (without ext)

for (const [category, files] of Object.entries(config)) {
  const catDir = path.join(componentsDir, category);
  if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });
  for (const file of files) {
    fileMap[file] = category;
    nameMap[file.replace(/\.tsx?$|\.css$/, '')] = category;
  }
}

// 1. Move files
console.log('Moving files...');
for (const [file, category] of Object.entries(fileMap)) {
  const oldPath = path.join(componentsDir, file);
  const newPath = path.join(componentsDir, category, file);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to ${category}/`);
  }
}

// 2. Scan all files in src/ to update imports
function walkSync(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.ts') || dirFile.endsWith('.tsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const allFiles = walkSync(srcDir);

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Is this file one of the components we moved?
  const basename = path.basename(file);
  const isMovedComponent = !!fileMap[basename];
  const myCategory = fileMap[basename];

  // A. If it's a moved component, fix its internal relative imports
  // e.g. import Foo from '../utils' -> import Foo from '../../utils'
  // e.g. import Foo from './Loader' -> import Foo from '../ui/Loader'
  // e.g. import Foo from './navbar/Nav' -> import Foo from '../navbar/Nav'
  if (isMovedComponent) {
    // Fix ../ imports -> prepend another ../
    content = content.replace(/from\s+(['"])(\.\.\/[^'"]+)\1/g, 'from $1../$2$1');
    content = content.replace(/import\s+(['"])(\.\.\/[^'"]+)\1/g, 'import $1../$2$1'); // for css imports

    // Fix ./ imports
    content = content.replace(/from\s+(['"])\.\/([^'"]+)\1/g, (match, q, target) => {
      const parts = target.split('/');
      const targetBase = parts[0];
      if (nameMap[targetBase]) {
        return `from ${q}../${nameMap[targetBase]}/${target}${q}`;
      }
      return `from ${q}../${target}${q}`;
    });
    content = content.replace(/import\s+(['"])\.\/([^'"]+)\1/g, (match, q, target) => {
      const parts = target.split('/');
      const targetBase = parts[0];
      if (nameMap[targetBase]) {
        return `import ${q}../${nameMap[targetBase]}/${target}${q}`;
      }
      return `import ${q}../${target}${q}`;
    });
  }

  // B. Fix imports everywhere pointing TO the moved components
  // matches: components/Footer -> components/layout/Footer
  content = content.replace(/components\/([A-Za-z0-9_]+)/g, (match, compName) => {
    if (nameMap[compName]) {
      // It's a moved component
      return `components/${nameMap[compName]}/${compName}`;
    }
    return match; // ignore if not moved (like auth, navbar, etc)
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    // console.log(`Updated imports in ${path.relative(srcDir, file)}`);
  }
}

console.log('Refactor script completed.');
