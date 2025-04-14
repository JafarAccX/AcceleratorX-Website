

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

    try {
        const response = await fetch('http://localhost:3020/zoom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.text(); // Use text to handle non-JSON responses
            console.error('Failed to register for Zoom meeting:', errorData);
            throw new Error('Failed to register for Zoom meeting.');
        }

        const responseData = await response.json();
        console.log('Zoom registration successful:', responseData);
        return responseData;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error registering for Zoom meeting:', error.message);
        } else {
            console.error('Unknown error registering for Zoom meeting:', error);
        }
        throw error;
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