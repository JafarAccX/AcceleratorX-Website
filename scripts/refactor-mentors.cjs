const fs = require('fs');
const path = require('path');

const files = [
    "src/pages/courses/productmanagement/v2/ProductManagementPageV2.tsx",
    "src/pages/courses/productmanagement/productanalytics/v2/ProductAnalyticsPageV2.tsx",
    "src/pages/courses/GenAI/v2/GenAIv2Part3.tsx",
    "src/pages/courses/datascience/v2/DataSciencePageV2.tsx",
    "src/pages/courses/AIDM/v2/AIDMPageV2.tsx",
    "src/pages/courses/advanceGenAI/v2/AdvanceGenAIv2Part3.tsx",
    "src/pages/courses/advance-ai-crash-course/v2/AICrashCoursev2Part3.tsx",
    "src/pages/courses/AICrashCourse/components/AICrashCourseMentors.tsx",
    "src/pages/courses/ai-carsh-course-fb/ai-carsh-courseMentors.tsx"
];

let modifiedCount = 0;

for (const relPath of files) {
    const fullPath = path.join(__dirname, relPath);
    if (!fs.existsSync(fullPath)) {
        console.log(`Skipping: ${fullPath} not found`);
        continue;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    const origContent = content;

    // We locate the div containing 'Floating Info Box at Bottom'
    // Usually it starts with <div className="absolute bottom-[...
    // Let's use a regex that matches the entire className="" block for the floating box

    // Let's match the old classes and inject new pill shape and border
    content = content.replace(
        /className="absolute bottom-\[[^\]]+\] left-1\/2 -translate-x-1\/2 w-\[[^\]]+\] sm:w-\[[^\]]+\] h-\[[^\]]+\] sm:h-\[[^\]]+\] rounded-\[[^\]]+\](.*?)"/g,
        (match, middle) => {
            if (middle.includes("backdrop-blur")) {
                 return `className="absolute bottom-[-14px] left-1/2 -translate-x-1/2 w-[100%] sm:w-[108%] h-[72px] sm:h-[88px] rounded-full${middle}"`;
            }
            return match;
        }
    );
    
    // Also change the border to the blue glow color shown in the screenshot (#3B82F6)
    // The previous border was `border border-white/10 shadow-[0_8px_32px_rgba(...)]`
    content = content.replace(/border border-white\/10 shadow-\[0_8px_32px_rgba\(([^,]+,[^,]+,[^,]+),([^\]]+)\)\]/g, 
        (match, rgb) => {
            // we create a glowing border using that rgb!
            return `border-2 border-[rgb(${rgb})]/60 shadow-[0_4px_30px_rgba(${rgb},0.4)]`;
        }
    );
    
    // Make the background darker to match the screenshot
    content = content.replace(/background: "linear-gradient\(90deg, rgba\(10, 10, 10, 0.1\) 0%, rgba\(40, 40, 40, 0.1\) 100%\)"/g, 
        'background: "linear-gradient(90deg, rgba(10, 10, 10, 0.75) 0%, rgba(30, 30, 30, 0.75) 100%)"'
    );

    if (content !== origContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Modified: ${relPath}`);
        modifiedCount++;
    }
}

console.log(`Done. Modified ${modifiedCount} files.`);
