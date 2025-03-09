/**
 * Knowledge Base for AcceleratorX
 * This file contains comprehensive information about AcceleratorX that the chatbot can use to answer customer support questions
 */

interface KnowledgeItem {
  keywords: string[];
  content: string;
  category: string; 
}

const acceleratorXKnowledge: KnowledgeItem[] = [
  // Company Information
  {
    keywords: ['about', 'company', 'acceleratorx', 'what is', 'who is', 'mission', 'vision', 'values', 'history'],
    content: 'AcceleratorX is a premier education and upskilling platform founded in 2020 that offers industry-leading programs, mentorship, and career opportunities. Our mission is to help professionals master the skills that matter in today\'s competitive job market and accelerate their career growth. Our vision is to become the world\'s most trusted platform for professional transformation, and we operate on the core values of excellence, innovation, integrity, and inclusivity.',
    category: 'company'
  },
  {
    keywords: ['team', 'founders', 'leadership', 'executives', 'management', 'ceo', 'cto', 'staff'],
    content: 'AcceleratorX was founded by a team of industry veterans with extensive experience in education technology and professional development. Our leadership team includes experts from top tech companies and educational institutions who are passionate about transforming professional education. The company is led by our CEO, who brings over 15 years of experience in EdTech innovation.',
    category: 'company'
  },
  
  // Programs and Services
  {
    keywords: ['services', 'offerings', 'solutions', 'provide', 'offer', 'programs', 'all programs', 'courses list'],
    content: 'AcceleratorX offers a comprehensive range of upskilling programs and services including: 1) Data Analytics & Data Science, 2) Software Development, 3) Product Management, 4) Digital Marketing, 5) UX/UI Design, 6) Business Analytics, 7) Leadership & Management, 8) Professional Development Courses, 9) Personalized Mentorship Programs, 10) Career Guidance, 11) Industry Expert Interactions, and 12) Networking Opportunities. Each program is designed with our EIE methodology to ensure practical skill development.',
    category: 'programs'
  },
  {
    keywords: ['data', 'analytics', 'data analytics', 'data science', 'big data', 'machine learning', 'ai'],
    content: 'AcceleratorX\'s Data Analytics & Data Science programs are designed for ambitious professionals ready to master data-driven decision making and advanced analytics. The curriculum covers data visualization, statistical analysis, Python programming, SQL, machine learning algorithms, and AI applications. Our EIE (Education, Implementation, Experience) methodology ensures you learn practical skills through real-world projects using tools like Tableau, Power BI, Python, R, and SQL. The program includes capstone projects with actual company data and mentorship from data scientists at leading tech companies.',
    category: 'programs'
  },
  {
    keywords: ['software', 'development', 'programming', 'coding', 'web development', 'app development', 'full stack'],
    content: 'The Software Development program at AcceleratorX covers full-stack development skills including front-end technologies (HTML, CSS, JavaScript, React), back-end development (Node.js, Python, Java), database management, API integration, and DevOps practices. Participants work on building complete applications from scratch and contribute to open-source projects. The program emphasizes clean code practices, testing methodologies, and modern development workflows used in top tech companies.',
    category: 'programs'
  },
  {
    keywords: ['product', 'management', 'product manager', 'pm', 'product development'],
    content: 'AcceleratorX\'s Product Management program teaches you how to identify market opportunities, define product vision, create roadmaps, and lead cross-functional teams. You\'ll learn user research methods, prototyping, agile methodologies, product analytics, and go-to-market strategies. The program includes workshops on stakeholder management, feature prioritization, and product lifecycle management. Graduates emerge ready to drive product strategy and execution in technology companies.',
    category: 'programs'
  },
  {
    keywords: ['digital', 'marketing', 'seo', 'sem', 'social media', 'content marketing', 'email marketing'],
    content: 'The Digital Marketing program at AcceleratorX covers comprehensive strategies for online brand building and customer acquisition. Topics include SEO, SEM, social media marketing, content strategy, email campaigns, analytics, and conversion optimization. Participants get hands-on experience with tools like Google Analytics, Google Ads, Facebook Ads Manager, and marketing automation platforms. The program includes certification preparation for Google and Facebook marketing credentials.',
    category: 'programs'
  },
  {
    keywords: ['ux', 'ui', 'design', 'user experience', 'user interface', 'product design', 'web design'],
    content: 'AcceleratorX\'s UX/UI Design program teaches human-centered design principles, user research methodologies, information architecture, wireframing, prototyping, and visual design fundamentals. Participants build comprehensive portfolios through real-world projects, learning industry-standard tools like Figma, Adobe XD, and Sketch. The curriculum also covers design systems, accessibility standards, and collaboration with development teams.',
    category: 'programs'
  },
  {
    keywords: ['business', 'analytics', 'business intelligence', 'bi', 'data visualization', 'reporting'],
    content: 'The Business Analytics program focuses on transforming business data into actionable insights. Participants learn data analysis techniques, dashboard creation, KPI development, and data storytelling. The curriculum covers Excel advanced functions, SQL, Tableau, Power BI, and basic Python for business applications. Graduates can effectively analyze business performance, identify trends, and make data-driven recommendations to stakeholders.',
    category: 'programs'
  },
  {
    keywords: ['leadership', 'management', 'executive', 'team lead', 'manager'],
    content: 'AcceleratorX\'s Leadership & Management program develops essential skills for effective team leadership. The curriculum covers strategic thinking, team building, conflict resolution, performance management, and organizational development. Through case studies, role-playing exercises, and coaching sessions, participants enhance their ability to inspire teams, drive change, and achieve business objectives. The program is ideal for new managers and experienced leaders looking to refine their approach.',
    category: 'programs'
  },
  
  // Methodology and Approach
  {
    keywords: ['methodology', 'approach', 'learning', 'eie', 'education', 'implementation', 'experience'],
    content: 'AcceleratorX follows the proprietary EIE (Education, Implementation, Experience) methodology. This three-pillar approach ensures comprehensive skill development: 1) Education: Learn concepts and theories through expert-led sessions and curated resources, 2) Implementation: Apply knowledge through hands-on projects, assignments, and real-world problem-solving, 3) Experience: Gain practical industry experience through capstone projects, internships, and collaborative work with actual companies. This methodology ensures that participants not only understand concepts but can apply them effectively in professional settings.',
    category: 'methodology'
  },
  {
    keywords: ['learning', 'format', 'online', 'in-person', 'hybrid', 'flexible', 'schedule'],
    content: 'AcceleratorX offers flexible learning formats to accommodate diverse needs. Programs are available in: 1) Online self-paced format with on-demand video lessons and resources, 2) Online instructor-led cohorts with live sessions and group activities, 3) Hybrid format combining online learning with weekend in-person workshops, and 4) Enterprise custom programs delivered on-site at company locations. All formats include access to our learning platform, mentorship opportunities, and community features.',
    category: 'methodology'
  },
  
  // Support and Mentorship
  {
    keywords: ['mentorship', 'experts', 'guidance', 'support', 'mentor', 'coaching'],
    content: 'AcceleratorX provides comprehensive mentorship from industry experts who guide participants through their learning journey. Our mentors include professionals from Fortune 500 companies, successful entrepreneurs, and domain specialists with extensive experience. Mentorship includes: 1) One-on-one sessions focused on your specific challenges and goals, 2) Portfolio and project reviews with actionable feedback, 3) Career strategy discussions, 4) Industry insights and trend analysis, and 5) Networking introductions to relevant professionals in your field.',
    category: 'support'
  },
  {
    keywords: ['support', 'help', 'assistance', 'technical support', 'customer service', 'student support'],
    content: 'AcceleratorX offers multi-channel support to ensure your learning experience is smooth and effective. Our support includes: 1) 24/7 technical assistance for platform-related issues, 2) Academic advisors available via chat, email, and scheduled calls, 3) Peer support communities for each program, 4) Weekly office hours with instructors, 5) Comprehensive knowledge base and FAQs, and 6) Dedicated program coordinators for cohort-based programs. We aim to respond to all inquiries within 24 hours.',
    category: 'support'
  },
  
  // Career Services
  {
    keywords: ['career', 'opportunities', 'jobs', 'placement', 'growth', 'advancement', 'promotion'],
    content: 'AcceleratorX is committed to accelerating your career growth through our comprehensive Career Acceleration services. These include: 1) Resume and LinkedIn profile optimization, 2) Mock interviews and feedback sessions, 3) Salary negotiation coaching, 4) Access to our exclusive job board with partner companies, 5) Networking events with industry leaders, 6) Career fairs with hiring partners, and 7) Alumni referral programs. Our career services team works with you to develop a personalized strategy aligned with your professional goals.',
    category: 'career'
  },
  {
    keywords: ['alumni', 'network', 'community', 'graduates', 'after program'],
    content: 'Upon completing an AcceleratorX program, you join our global alumni network of over 10,000 professionals. Alumni benefits include: 1) Lifetime access to program materials and updates, 2) Exclusive alumni-only events and webinars, 3) Continued mentorship opportunities, 4) Discounts on additional programs, 5) Opportunities to return as mentors or guest speakers, and 6) Access to our alumni directory for networking. Our alumni community spans 45+ countries and includes professionals at companies like Google, Amazon, Microsoft, and numerous successful startups.',
    category: 'career'
  },
  
  // Practical Information
  {
    keywords: ['contact', 'reach', 'email', 'phone', 'location', 'address', 'office'],
    content: 'You can contact AcceleratorX through multiple channels: 1) Website: www.acceleratorx.org, 2) Email: support@acceleratorx.org for general inquiries, admissions@acceleratorx.org for application questions, 3) Phone: +1-555-ACCEL-X (available Monday-Friday, 9am-6pm EST), 4) Live Chat on our website (24/7), 5) Social Media: @AcceleratorX on LinkedIn, Twitter, Facebook, and Instagram. Our headquarters is located in New York City, with additional offices in San Francisco, London, and Singapore.',
    category: 'practical'
  },
  {
    keywords: ['benefits', 'advantages', 'why choose', 'value', 'differentiators'],
    content: 'Choosing AcceleratorX offers numerous benefits that differentiate us from other platforms: 1) Industry-relevant curriculum developed with input from leading companies, 2) Expert instructors with extensive practical experience, not just academic knowledge, 3) Our proven EIE methodology focusing on practical implementation, 4) Personalized learning paths adapted to your goals, 5) Real-world projects that build an impressive portfolio, 6) Direct mentorship from industry leaders, 7) Active community of ambitious professionals, 8) Comprehensive career services and job placement assistance, 9) Flexible learning formats to fit your schedule, and 10) Ongoing support even after program completion.',
    category: 'practical'
  },
  {
    keywords: ['skills', 'competencies', 'abilities', 'expertise', 'learn', 'master'],
    content: 'AcceleratorX helps you develop both technical and soft skills that are in high demand. Technical skills vary by program but include data analysis, programming, design thinking, marketing automation, and more. All programs also emphasize essential soft skills including: 1) Critical thinking and problem-solving, 2) Communication and presentation abilities, 3) Collaboration and teamwork, 4) Project management and organization, 5) Adaptability and continuous learning, 6) Leadership and influence, and 7) Business acumen and strategic thinking. This holistic approach ensures you\'re prepared for real-world professional challenges.',
    category: 'practical'
  },
  {
    keywords: ['testimonials', 'reviews', 'success stories', 'alumni experiences', 'feedback'],
    content: 'AcceleratorX has transformed thousands of careers. Our alumni report an average salary increase of 32% within six months of program completion. Success stories include: 1) Sarah J., who transitioned from marketing to data analytics and doubled her salary, 2) Miguel R., who used his new UX skills to secure a senior position at a Fortune 100 company, 3) Priya M., who launched a successful startup after our Product Management program, and 4) James T., who was promoted to leadership within three months of completing our management program. Our programs maintain a 4.8/5 satisfaction rating based on over 15,000 graduate reviews.',
    category: 'practical'
  },
  
  // Financial Information
  {
    keywords: ['pricing', 'cost', 'fees', 'investment', 'tuition', 'price'],
    content: 'AcceleratorX offers competitive pricing with multiple payment options. Program investments range from $1,500 for short specialized courses to $8,000 for comprehensive career-transformation programs. We provide: 1) Upfront payment discounts (10-15%), 2) Monthly installment plans at 0% interest, 3) Income Share Agreements for select programs (pay after you get a job), 4) Employer sponsorship facilitation, 5) Scholarships for underrepresented groups in tech, and 6) Early bird registration discounts. All programs come with a 7-day satisfaction guarantee. For detailed pricing on specific programs, please visit our website or contact our admissions team.',
    category: 'financial'
  },
  {
    keywords: ['financial aid', 'scholarships', 'discounts', 'payment plans', 'installments', 'isa'],
    content: 'AcceleratorX is committed to making quality education accessible. Our financial assistance options include: 1) Merit-based scholarships covering 15-50% of program costs, 2) Diversity scholarships for underrepresented groups in technology, 3) Income Share Agreements where you pay only after securing a job with a minimum salary threshold, 4) 0% interest payment plans spread over 6-24 months, 5) Early registration discounts of up to 20%, and 6) Group enrollment discounts for friends or colleagues joining together. Our financial counselors can help you identify the best option for your situation.',
    category: 'financial'
  },
  
  // Program Details
  {
    keywords: ['duration', 'timeline', 'schedule', 'time', 'commitment', 'hours', 'weeks'],
    content: 'AcceleratorX programs vary in duration based on the specialization and format. Typical timeframes include: 1) Intensive full-time programs: 8-12 weeks (30-40 hours/week), 2) Part-time professional programs: 16-24 weeks (15-20 hours/week), 3) Self-paced programs: 3-6 months (flexible hours), 4) Executive programs: 8-10 weekends (Fri-Sun intensive format). Most participants in part-time programs successfully balance their studies with full-time employment. All programs include a mix of scheduled live sessions, self-paced learning, project work, and mentorship meetings.',
    category: 'program_details'
  },
  {
    keywords: ['certification', 'certificate', 'credential', 'qualification', 'accreditation'],
    content: 'Upon successful completion of AcceleratorX programs, participants receive industry-recognized certificates that validate their skills and knowledge. Our certifications are: 1) Endorsed by leading industry partners including Fortune 500 companies, 2) Accredited by relevant professional associations, 3) Recognized for continuing education credits in many organizations, 4) Verifiable through blockchain technology for authenticity, and 5) Designed to highlight specific competencies mastered. Many of our programs also prepare you for industry-standard certifications from Google, AWS, Salesforce, and other platforms.',
    category: 'program_details'
  },
  {
    keywords: ['prerequisites', 'requirements', 'qualifications', 'eligible', 'who can join'],
    content: 'AcceleratorX programs are designed for various experience levels. Entry requirements vary by program: 1) Beginner programs require only basic computer literacy and strong motivation, 2) Intermediate programs typically require some relevant experience or adjacent skills, 3) Advanced programs may require specific technical backgrounds or equivalent experience. All applicants should demonstrate: 1) Commitment to completing the program, 2) Clear goals for skill application, 3) Basic English proficiency for instruction, and 4) Access to necessary technology (computer and internet). We offer preparatory courses for those needing to build foundational skills before advanced programs.',
    category: 'program_details'
  },
  {
    keywords: ['application', 'admission', 'enroll', 'join', 'register', 'sign up', 'how to start'],
    content: 'The AcceleratorX application process is straightforward: 1) Browse programs on our website and select one that matches your goals, 2) Complete the online application form with your background and objectives, 3) For some programs, complete a brief skills assessment or submit a portfolio, 4) Schedule an admissions interview to discuss your goals and ensure program fit, 5) Receive an admission decision within 5 business days, 6) Complete enrollment by selecting your payment option and signing the program agreement, 7) Gain immediate access to preparatory materials before your official start date. Applications are accepted on a rolling basis, with new cohorts starting monthly for most programs.',
    category: 'program_details'
  },
  
  // Technical Support
  {
    keywords: ['technical', 'issues', 'problems', 'platform', 'login', 'access', 'trouble', 'bug'],
    content: 'If you\'re experiencing technical issues with the AcceleratorX platform, we\'re here to help: 1) For login problems, try resetting your password through the "Forgot Password" link or clearing your browser cache, 2) Platform access issues can often be resolved by using a supported browser (Chrome, Firefox, Safari, Edge), 3) For video playback problems, check your internet connection and try lowering the video quality, 4) If you encounter errors during assignments or project submissions, take a screenshot of the error and contact our support team, 5) For any persistent issues, contact technical support at support@acceleratorx.org or use the live chat feature on our platform. Our technical team is available 24/7 and typically responds within 2 hours.',
    category: 'technical'
  },
  {
    keywords: ['account', 'profile', 'settings', 'password', 'email', 'update information'],
    content: 'Managing your AcceleratorX account is simple: 1) To update your profile information, log in and navigate to "My Profile" in the top-right menu, 2) Password changes can be made in the "Security Settings" section, 3) To update your email address, you\'ll need to verify both your old and new email addresses, 4) Notification preferences can be customized in the "Communications" tab, 5) Billing information and payment methods can be updated in the "Billing" section, 6) To link your account with LinkedIn or GitHub for portfolio sharing, use the "Integrations" option. If you need to change your program or cohort, please contact student services rather than making these changes through your account settings.',
    category: 'technical'
  }
];

/**
 * Find relevant knowledge items based on a query using an improved matching algorithm
 * @param query The user's query
 * @returns The most relevant knowledge item content or a combination of relevant items
 */
export function findRelevantKnowledge(query: string): string | null {
  const normalizedQuery = query.toLowerCase();
  
  // Break the query into individual words for better matching
  const queryWords = normalizedQuery
    .replace(/[.,?!;:()]/g, '') // Remove punctuation
    .split(' ')
    .filter(word => word.length > 2); // Filter out very short words
  
  // Score each knowledge item based on keyword matches with weighted scoring
  const scoredItems = acceleratorXKnowledge.map(item => {
    let matchScore = 0;
    
    // Check for exact phrase matches (highest weight)
    item.keywords.forEach(keyword => {
      if (normalizedQuery.includes(keyword.toLowerCase())) {
        // Longer keyword matches get higher scores
        matchScore += keyword.length * 2;
      }
    });
    
    // Check for individual word matches
    queryWords.forEach(word => {
      item.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(word)) {
          matchScore += 1;
        }
      });
    });
    
    return {
      content: item.content,
      score: matchScore,
      category: item.category
    };
  });
  
  // Sort by score (highest first)
  scoredItems.sort((a, b) => b.score - a.score);
  
  // Get top 3 results if they have a score above threshold
  const topResults = scoredItems
    .filter(item => item.score > 0)
    .slice(0, 3);
  
  if (topResults.length > 0) {
    // If we have multiple good matches from different categories, combine them
    if (topResults.length > 1 && topResults[1].score > topResults[0].score * 0.7) {
      // Check if they're from different categories
      const categories = new Set(topResults.map(item => item.category));
      
      if (categories.size > 1) {
        // Combine the top results from different categories
        return topResults
          .map(item => item.content)
          .join('\n\n');
      }
    }
    
    // Otherwise just return the best match
    return topResults[0].content;
  }
  
  return null;
}

/**
 * Get a system prompt that includes relevant knowledge
 * @param query The user's query
 * @returns A system prompt with context about AcceleratorX
 */
export function getEnhancedPrompt(query: string): string {
  const relevantKnowledge = findRelevantKnowledge(query);
  
  let prompt = "You are an AI customer support assistant for AcceleratorX, a premier education and upskilling platform. ";
  prompt += "Your goal is to provide helpful, accurate, and friendly responses to customer inquiries. ";
  prompt += "Always maintain a professional but conversational tone. ";
  
  if (relevantKnowledge) {
    prompt += "Here is some specific information about AcceleratorX that is relevant to this query: \n\n";
    prompt += relevantKnowledge;
    prompt += "\n\nPlease use this information to provide an accurate and helpful response. If the user asks for details not covered in this information, you can acknowledge that you'll connect them with a human representative for more specific assistance.";
  } else {
    prompt += "Please provide a helpful response based on general knowledge about education platforms and professional development programs. If you don't have specific information about AcceleratorX related to this query, politely offer to connect the user with a human representative who can provide more detailed assistance.";
  }
  
  prompt += "\n\nRemember to: 1) Be concise but thorough, 2) Offer next steps when appropriate, 3) Express enthusiasm about AcceleratorX's programs, and 4) Thank the user for their interest in AcceleratorX.";
  
  return prompt;
}
