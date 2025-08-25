// Page metadata configuration
export interface PageMetadata {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  // Homepage
  "/": {
    title: "AcceleratorX | Learn Product, AI & Data Skills",
    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
    ogTitle: "AcceleratorX - Future Skills for Career Growth",
    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
    ogImage: "/companylogo-new.webp"
  },

  // About Us
  "/about-us": {
    title: "About Us | AcceleratorX Learning Platform",
    description: "Discover AcceleratorX, a platform dedicated to upskilling professionals in AI, Data Analytics, Marketing, and Product Management with expert-led programs.",
    ogTitle: "About AcceleratorX",
    ogDescription: "Learn how AcceleratorX helps learners acquire future-ready skills in AI, Product Management, and Data Analytics."
  },

  // Auth & Account
  "/login": {
    title: "Login | AcceleratorX Learning Portal",
    description: "Login to AcceleratorX and access your courses, workshops, and resources in Product Management, AI, Data Analytics, and Marketing programs.",
    ogTitle: "Login to AcceleratorX",
    ogDescription: "Sign in to your AcceleratorX account to continue your learning journey and access all your enrolled courses."
  },

  "/sign-up": {
    title: "Sign Up | AcceleratorX",
    description: "Create your AcceleratorX account to access AI, Data Analytics, Product Management, and Marketing courses and start your learning journey.",
    ogTitle: "Sign Up for AcceleratorX",
    ogDescription: "Register for AcceleratorX and begin your learning journey today."
  },

  // Policies
  "/privacy-policy": {
    title: "Privacy Policy | AcceleratorX",
    description: "Read AcceleratorX's privacy policy to understand how we collect, protect, and use your personal information while you use our platform.",
    ogTitle: "AcceleratorX Privacy Policy",
    ogDescription: "AcceleratorX ensures your data privacy and security. Read our complete privacy policy."
  },

  "/terms-and-conditions": {
    title: "Terms & Conditions | AcceleratorX",
    description: "Review AcceleratorX's terms and conditions outlining the user agreement, responsibilities, and usage guidelines for our courses and services.",
    ogTitle: "AcceleratorX Terms & Conditions",
    ogDescription: "Learn about the rules and guidelines for using AcceleratorX programs and services."
  },

  "/refund-policy": {
    title: "Refund Policy | AcceleratorX",
    description: "Understand AcceleratorX's refund policy covering eligibility, process, and conditions for refunds on courses, workshops, and events.",
    ogTitle: "AcceleratorX Refund Policy",
    ogDescription: "Learn how AcceleratorX manages course and workshop refunds."
  },

  // Programs & Events
  "/xsat": {
    title: "XSAT Program | AcceleratorX",
    description: "Test your Product Management, AI, and Data Analytics skills with AcceleratorX's XSAT program designed to benchmark and enhance capabilities.",
    ogTitle: "AcceleratorX XSAT Program",
    ogDescription: "Take AcceleratorX's XSAT and measure your career readiness in AI, Data, and Product Management."
  },

  "/events": {
    title: "Events & Workshops | AcceleratorX",
    description: "Explore AcceleratorX events and workshops on Product Management, AI, Data Analytics, and Marketing with industry experts and mentors.",
    ogTitle: "AcceleratorX Events & Workshops",
    ogDescription: "Learn future skills by joining AcceleratorX's expert-led events and masterclasses."
  },

  "/event/PMtakedown/view": {
    title: "Product Management Takedown Event | AcceleratorX",
    description: "Join the PM Takedown event by AcceleratorX and learn advanced frameworks, strategies, and insights in real-world product management.",
    ogTitle: "AcceleratorX PM Takedown Event",
    ogDescription: "Learn practical PM strategies at AcceleratorX's Product Management Takedown event."
  },

  // Courses
  "/courses/generative-ai": {
    title: "Generative AI Course | AcceleratorX",
    description: "Master Generative AI at AcceleratorX with hands-on training in AI tools, workflows, and applications to build intelligent business solutions.",
    ogTitle: "AcceleratorX Generative AI Course",
    ogDescription: "Enroll in AcceleratorX's Generative AI course and learn to apply AI-driven innovation."
  },

  "/courses/generative-ai-fb": {
    title: "Generative AI Fast-Track Course | AcceleratorX",
    description: "Enroll in AcceleratorX's fast-track Generative AI program designed to help professionals quickly adopt AI tools and applications.",
    ogTitle: "AcceleratorX Generative AI Fast-Track",
    ogDescription: "Learn Generative AI faster with AcceleratorX's focused fast-track program."
  },

  "/courses/advance-performance-marketing-with-ai": {
    title: "AI Performance Marketing Course | AcceleratorX",
    description: "Learn advanced performance marketing using AI-driven strategies at AcceleratorX. Gain expertise in automation, targeting, and campaign optimization.",
    ogTitle: "AcceleratorX AI Performance Marketing",
    ogDescription: "Master AI-powered marketing and boost business performance with AcceleratorX."
  },

  "/courses/data-analytics": {
    title: "Data Analytics Course | AcceleratorX",
    description: "Gain hands-on expertise in data analysis, visualization, and decision-making with AcceleratorX's Data Analytics training program.",
    ogTitle: "AcceleratorX Data Analytics Course",
    ogDescription: "Learn data analytics skills to analyze, visualize, and make smarter decisions."
  },

  "/courses/product-management": {
    title: "Product Management Course | AcceleratorX",
    description: "Learn product strategy, lifecycle management, and leadership skills with AcceleratorX's Product Management course.",
    ogTitle: "AcceleratorX Product Management Course",
    ogDescription: "Master product frameworks and tools in AcceleratorX's PM course."
  },

  "/courses/gen-ai-for-pms": {
    title: "Generative AI for Product Managers | AcceleratorX",
    description: "Learn how Product Managers can use Generative AI for product strategy, automation, and innovation in AcceleratorX's specialized course.",
    ogTitle: "AcceleratorX GenAI for PMs Course",
    ogDescription: "Discover Generative AI applications tailored for Product Managers."
  },

  "/courses/product-management-program-fb": {
    title: "Product Management Program (Fast-Track) | AcceleratorX",
    description: "Enroll in AcceleratorX's fast-track Product Management program designed to help professionals gain PM skills quickly and effectively.",
    ogTitle: "AcceleratorX PM Fast-Track Program",
    ogDescription: "Learn PM frameworks and tools in AcceleratorX's accelerated program."
  },

  "/courses/data-analytics-program-fb": {
    title: "Data Analytics Program (Fast-Track) | AcceleratorX",
    description: "Join AcceleratorX's fast-track Data Analytics program to quickly develop analysis, visualization, and reporting skills for business.",
    ogTitle: "AcceleratorX Data Analytics Fast-Track",
    ogDescription: "Upskill in Data Analytics with AcceleratorX's fast-track program."
  },

  "/courses/data-analytics-program-fb-b": {
    title: "Data Analytics Program (Batch) | AcceleratorX",
    description: "Learn data-driven decision-making in AcceleratorX's Data Analytics batch program. Gain practical analytics skills with expert-led training.",
    ogTitle: "AcceleratorX Data Analytics Batch Program",
    ogDescription: "Enroll in AcceleratorX's Data Analytics batch program today."
  },

  "/courses/product-management-program-eie": {
    title: "Product Management EIE Program | AcceleratorX",
    description: "AcceleratorX's EIE Product Management program helps you gain structured PM knowledge, practical tools, and leadership expertise.",
    ogTitle: "AcceleratorX Product Management EIE",
    ogDescription: "Join AcceleratorX's exclusive Product Management EIE program."
  },

  "/courses/data-analytics-program-eie": {
    title: "Data Analytics EIE Program | AcceleratorX",
    description: "Master analytics and insights with AcceleratorX's Data Analytics EIE program designed for professionals and aspiring data leaders.",
    ogTitle: "AcceleratorX Data Analytics EIE",
    ogDescription: "Build expert-level data analytics skills in AcceleratorX's EIE program."
  },

  "/courses/n8n-automation": {
    title: "n8n Automation Course | AcceleratorX",
    description: "Learn workflow automation using n8n with AcceleratorX. Build custom automations, optimize processes, and integrate AI-driven tools.",
    ogTitle: "AcceleratorX n8n Automation Course",
    ogDescription: "Master n8n and build powerful automation workflows with AcceleratorX."
  },

  "/courses/onsite-workshopz": {
    title: "Onsite Workshops | AcceleratorX",
    description: "Join AcceleratorX's onsite workshops in AI, Data Analytics, and Product Management for immersive, hands-on learning experiences.",
    ogTitle: "AcceleratorX Onsite Workshops",
    ogDescription: "Learn through in-person sessions at AcceleratorX's onsite workshops."
  },

  // Admin Routes
  "/admin/blogs": {
    title: "Admin Blogs Dashboard | AcceleratorX",
    description: "Manage blog content in the AcceleratorX admin dashboard. Create, edit, and publish blogs to engage learners and professionals.",
    ogTitle: "AcceleratorX Blogs Admin",
    ogDescription: "Access AcceleratorX's admin portal for blog management and publishing."
  },

  "/admin/blogs/new": {
    title: "Create New Blog | AcceleratorX Admin",
    description: "Add and publish new blog posts through the AcceleratorX admin system to share insights, updates, and learning content.",
    ogTitle: "Create Blog - AcceleratorX Admin",
    ogDescription: "Write and publish new blog posts with the AcceleratorX admin dashboard."
  },

  "/admin/blogs/edit/:id": {
    title: "Edit Blog Post | AcceleratorX Admin",
    description: "Update and manage existing blog posts with the AcceleratorX admin editor to keep content fresh, accurate, and engaging for learners.",
    ogTitle: "Edit Blog - AcceleratorX Admin",
    ogDescription: "Access the AcceleratorX admin editor to update and optimize blog content."
  },

  // Success Pages
  "/thank-you": {
    title: "Thank You | AcceleratorX",
    description: "Thank you for connecting with AcceleratorX. Your registration or request has been received successfully. We'll be in touch soon.",
    ogTitle: "Thank You - AcceleratorX",
    ogDescription: "AcceleratorX has received your submission. Our team will connect with you shortly."
  },

  "/registration-sucessfull": {
    title: "Registration Successful | AcceleratorX",
    description: "Your AcceleratorX registration was successful. Get ready to start learning and exploring our AI, Data Analytics, and Product Management programs.",
    ogTitle: "Registration Confirmed - AcceleratorX",
    ogDescription: "Your AcceleratorX registration is complete. Begin your learning journey today."
  },

  // Workshop Routes
  "/workshop/pm-masterclass": {
    title: "Product Management Masterclass | AcceleratorX",
    description: "Learn advanced product management strategies, frameworks, and tools in AcceleratorX's PM Masterclass taught by industry experts.",
    ogTitle: "AcceleratorX PM Masterclass",
    ogDescription: "Join AcceleratorX's Product Management Masterclass to level up your PM skills."
  },

  "/workshop/dm-masterclass": {
    title: "Digital Marketing Masterclass | AcceleratorX",
    description: "Enroll in AcceleratorX's Digital Marketing Masterclass to master SEO, performance marketing, and AI-powered campaigns for business growth.",
    ogTitle: "AcceleratorX Digital Marketing Masterclass",
    ogDescription: "Learn digital marketing strategies and tools at AcceleratorX's DM Masterclass."
  },

  "/workshop/da-masterclass": {
    title: "Data Analytics Masterclass | AcceleratorX",
    description: "Join AcceleratorX's Data Analytics Masterclass to develop expertise in data visualization, reporting, and business insights.",
    ogTitle: "AcceleratorX Data Analytics Masterclass",
    ogDescription: "Learn advanced analytics and decision-making at AcceleratorX's DA Masterclass."
  },

  "/workshop/da-masterclass-bxwxy": {
    title: "Data Analytics Workshop | AcceleratorX",
    description: "Experience hands-on training in AcceleratorX's Data Analytics Workshop and sharpen your skills in analytics and business intelligence.",
    ogTitle: "AcceleratorX Data Analytics Workshop",
    ogDescription: "Build strong data analytics skills with AcceleratorX's hands-on workshop."
  },

  "/workshop/gen-ai-masterclass": {
    title: "Generative AI Masterclass | AcceleratorX",
    description: "Learn practical Generative AI applications in AcceleratorX's Masterclass, designed to help professionals adopt AI in real projects.",
    ogTitle: "AcceleratorX Generative AI Masterclass",
    ogDescription: "Master Generative AI tools and workflows with AcceleratorX's expert-led class."
  },

  "/workshop/gen-ai-masterclass-bxwcy": {
    title: "AI Tools Workshop | AcceleratorX",
    description: "Attend AcceleratorX's Generative AI workshop to explore tools, automation, and real-world AI workflows for professional growth.",
    ogTitle: "AcceleratorX AI Workshop",
    ogDescription: "Learn AI-powered tools and workflows with AcceleratorX's Generative AI workshop."
  },

  "/workshop/gen-ai-masterclass-thidtx": {
    title: "Generative AI Training Workshop | AcceleratorX",
    description: "Upskill in AcceleratorX's Generative AI training workshop and gain applied knowledge of AI tools, models, and automation workflows.",
    ogTitle: "AcceleratorX Generative AI Training",
    ogDescription: "Learn advanced AI models and workflows at AcceleratorX's GenAI workshop."
  },

  "/workshop-registration/success": {
    title: "Workshop Registration Success | AcceleratorX",
    description: "Your workshop registration at AcceleratorX is successful. Get ready to join expert-led sessions in Product, Data, Marketing, and AI.",
    ogTitle: "AcceleratorX Workshop Registration Confirmed",
    ogDescription: "Registration successful. Join your upcoming AcceleratorX workshop."
  },

  // Flyer Routes
  "/fa-register/gen-ai": {
    title: "Register for Generative AI Program | AcceleratorX",
    description: "Sign up for AcceleratorX's Generative AI program and start learning AI-powered tools, automation, and applications for real-world use.",
    ogTitle: "AcceleratorX Generative AI Registration",
    ogDescription: "Register today for AcceleratorX's Generative AI learning program."
  },

  "/fa-register/pm": {
    title: "Register for Product Management Program | AcceleratorX",
    description: "Join AcceleratorX's Product Management program by registering now. Learn practical PM frameworks, tools, and strategies with experts.",
    ogTitle: "AcceleratorX PM Program Registration",
    ogDescription: "Secure your spot in AcceleratorX's Product Management program."
  },

  "/fa-register/dm": {
    title: "Register for Digital Marketing Program | AcceleratorX",
    description: "Sign up for AcceleratorX's Digital Marketing program and learn AI-driven SEO, performance marketing, and campaign optimization.",
    ogTitle: "AcceleratorX Digital Marketing Registration",
    ogDescription: "Register for AcceleratorX's DM program and start learning AI-powered marketing."
  },

  "/fa-register/da": {
    title: "Register for Data Analytics Program | AcceleratorX",
    description: "Enroll in AcceleratorX's Data Analytics program and gain skills in data visualization, business insights, and data-driven decision-making.",
    ogTitle: "AcceleratorX Data Analytics Registration",
    ogDescription: "Register for AcceleratorX's Data Analytics program and start your learning journey."
  }
};

// Helper function to get metadata for a specific path
export function getPageMetadata(path: string): PageMetadata {
  // Try exact match first
  if (pageMetadata[path]) {
    return pageMetadata[path];
  }

  // Handle dynamic routes (like blog edit with ID)
  if (path.startsWith('/admin/blogs/edit/')) {
    return pageMetadata['/admin/blogs/edit/:id'];
  }

  // Default metadata for unmatched routes
  return {
    title: "AcceleratorX | Learn Product, AI & Data Skills",
    description: "AcceleratorX offers expert-led programs in Product Management, Data Analytics, Generative AI, and Marketing to accelerate your career growth.",
    ogTitle: "AcceleratorX - Future Skills for Career Growth",
    ogDescription: "Learn Product Management, AI, and Data Analytics at AcceleratorX with hands-on training and real-world projects.",
    ogImage: "/companylogo-new.webp"
  };
}
