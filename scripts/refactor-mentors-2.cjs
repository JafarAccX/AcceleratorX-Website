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
        continue;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    const origContent = content;

    // We replace the specific dimension sizes from my previous refactor to the user's preferred bounds.
    content = content.replace(/w-\[100%\] sm:w-\[108%\]/g, 'w-[90%] sm:w-[98%]');
    content = content.replace(/h-\[72px\] sm:h-\[88px\]/g, 'h-[62px] sm:h-[78px]');
    
    // Change 'border-2' to 'border' (1px), fix 'border-1' if the user manually saved it in PM page
    content = content.replace(/border-2 border-\[rgb/g, 'border border-[rgb');
    content = content.replace(/border-1 border-\[rgb/g, 'border border-[rgb');

    // Change blur size
    content = content.replace(/backdrop-blur-xl/g, 'backdrop-blur-sm');

    // User also apparently removed the transform transition, let's remove it if it exists 
    content = content.replace(/transition-transform duration-500 group-hover:scale-105 /g, '');

    if (content !== origContent) {
        fs.writeFileSync(fullPath, content);
        console.log(`Modified: ${relPath}`);
        modifiedCount++;
    }
}

console.log(`Done. Modified ${modifiedCount} files.`);
