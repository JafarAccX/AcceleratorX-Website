const zoomSecretToken = import.meta.env.VITE_ZOOM_SECRET_TOKEN!


/**
 * Registers a user for a Zoom meeting using fetch.
 * 
 * @param {string} fullName - The full name of the registrant.
 * @param {string} email - The email address of the registrant.
 * @param {string} phone - The phone number of the registrant.
 * 
 */
export async function registerForZoomMeeting(fullName: string, email: string, phone: string) {
    const [first_name, ...lastParts] = fullName.split(' ');
    const last_name = lastParts.join(' ') || '-';

    const payload = {
        first_name,
        last_name,
        email,
        phone
    };

    try {
        const response = await fetch('https://api.zoom.us/v2/meetings/85746065/registrants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${zoomSecretToken}` // 🔐 Replace with your actual Zoom JWT/OAuth token
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Zoom API error: ${response.status} - ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        console.log('Registration successful:', data);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error registering user:', error.message);
        } else {
            console.error('Error registering user:', error);
        }
        throw error;
    }
}


// const emailData = {
// 	name: submissionData.name,
// 	email: submissionData.email,
// 	phone: submissionData.phone,
// 	workshop_type: submissionData.workshop_type,
// 	created_at: new Date().toISOString(),
// };

// Trigger the email after data insertion is successful

// const response = await fetch('http://localhost:3020/sendmail', {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(emailData),
// });

// if (!response.ok) {
// 	throw new Error('Failed to trigger email.');
// }

// const responseData = await response.json();
// console.log('Email sent successfully:', responseData);
