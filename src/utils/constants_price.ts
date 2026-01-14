export const WORKSHOP_PRICE = {
    amount: 1000.00, // amount in rupees
    amountInPaise: 100000 // amount in paise (used for Razorpay)
};

// Course IDs from Organisation.Courses table
export const COURSE_IDS = {
    PM_PROGRAM: 'a8d7c6b5-4e3f-4a2b-9c1d-012345678901',
    DATA_ANALYTICS: 'f2e1d0c9-8b7a-4693-a5d4-563340654321',
    GENERATIVE_AI: 'b4e8d9f5-2c8f-5a67-93b8-89012345abc1',
    AIDM_NANO_DEGREE: 'a3f2e1d0-9c8b-4793-b6e5-674451765444',
    GENAI_FOR_PM: 'f2e1d0c9-8b7a-4693-a5d4-563340123456',
    AI_DATA_ANALYTICS_SELF_PACED: 'f2e1d0c9-8b7a-4693-a5d4-563340654333',
    N8N_WORKFLOW: 'a2f9d4b7-1c6e-4f3a-8b2d-9c123456abcd',
} as const;

// Course prices configuration
export const COURSE_PRICES = {
    PM_PROGRAM: {
        courseId: COURSE_IDS.PM_PROGRAM,
        amount: 1,
        amountInPaise: 100,
        gstPercentage: 1,
        name: 'Product Management Program'
    },
    DATA_ANALYTICS: {
        courseId: COURSE_IDS.DATA_ANALYTICS,
        amount: 39999,
        amountInPaise: 3999900,
        gstPercentage: 18,
        name: 'AI-Powered Data Analytics'
    },
    GENERATIVE_AI: {
        courseId: COURSE_IDS.GENERATIVE_AI,
        amount: 34999,
        amountInPaise: 3499900,
        gstPercentage: 18,
        name: 'Generative AI Program'
    },
    AIDM_NANO_DEGREE: {
        courseId: COURSE_IDS.AIDM_NANO_DEGREE,
        amount: 29999,
        amountInPaise: 2999900,
        gstPercentage: 18,
        name: 'Nano Degree in AI Digital Marketing'
    },
    GENAI_FOR_PM: {
        courseId: COURSE_IDS.GENAI_FOR_PM,
        amount: 24999,
        amountInPaise: 2499900,
        gstPercentage: 18,
        name: 'GenAI for Product Managers'
    },
} as const;