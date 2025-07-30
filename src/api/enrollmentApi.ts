import { api } from './index';

export interface EnrollmentData {
    full_name: string;
    phone_number: string;
    email: string;
    education_level: string;
    course?: string;
    work_experience?: string;
    designation?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    referrer?: string;
    landing_page_url?: string;
    fbclid?: string;
    gclid?: string;
    ttclid?: string;
    msclkid?: string;
}

export const createEnrollment = async (data: EnrollmentData) => {
    try {
        const response = await api.post('/enrollments-new', data);
        return response.data;
    } catch (error) {
        console.error('Error creating enrollment:', error);
        throw error;
    }
};
