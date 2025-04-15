/**
 * Registers a user for a Zoom meeting using fetch.
 *
 * @param {string} fullName - The full name of the registrant.
 * @param {string} email - The email address of the registrant.
 * @param {string} phone - The phone number of the registrant.
 * @param {string} zoomMeeting_id - The ID of the Zoom meeting.
 *
 */
export async function registerForZoomMeeting(fullName: string, email: string, phone: string, zoomMeeting_id: string) {
    const payload = {
        fullName,
        email,
        phone,
        zoomMeeting_id,
    };

    const apiUrl = 'https://api.acceleratorx.org';

    console.log('API URL:', apiUrl);
    try {
        console.log('Sending registration request to:', `${apiUrl}/zoom`);
        console.log('With payload:', payload);

        const response = await fetch(`${apiUrl}/zoom`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const responseData = await response.json().catch(async () => {
            // If JSON parsing fails, try to get text
            const text = await response.text();
            return { error: text };
        });

        if (!response.ok) {
            const errorDetails = responseData.details || responseData;
            const errorMessage = typeof errorDetails === 'object' ?
                JSON.stringify(errorDetails) :
                errorDetails.toString();
            console.error('Zoom registration failed:', errorDetails);
            throw new Error(errorMessage);
        }

        console.log('Zoom registration successful:', responseData);
        return responseData;
    } catch (error) {
        console.error('Error registering for Zoom meeting:', error);
        const errorMessage = error instanceof Error ? error.message : 'Failed to register for Zoom meeting';
        throw new Error(errorMessage);
    }
}

// const zoomData = {
//     fullName: submissionData.name,
//     email: submissionData.email,
//     phone: submissionData.phone,
//     zoomMeeting_id: submissionData.workshop_type,
// };

// const response = await fetch('http://localhost:3020/zoom', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(zoomData),
// });

// if (!response.ok) {
//     throw new Error('Failed to register for Zoom meeting.');
// }

// const responseData = await response.json();
// console.log('Zoom registration successful:', responseData);