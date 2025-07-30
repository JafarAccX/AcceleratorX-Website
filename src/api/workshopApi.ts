import { api } from './index';

export interface WorkshopRegistrationData {
    name: string;
    email: string;
    phone: string;
    education: string;
    designation: string;
    years_of_experience: string;
    years_of_passing: string;
    workshop_type?: string;
    is_free?: boolean;
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

export const createWorkshopRegistration = async (data: WorkshopRegistrationData) => {
    try {
        const response = await api.post('/workshop-registrations', data);
        return response.data;
    } catch (error) {
        console.error('Error creating workshop registration:', error);
        throw error;
    }
};
