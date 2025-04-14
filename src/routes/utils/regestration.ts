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


export async function sendWhatsAppMessage({
    apiKey,
    campaignName,
    phone,
    name,
    masterclass,
    sessionDate,

    link,
}: {
    apiKey: string;
    campaignName: string;
    phone: string;
    name: string;
    masterclass: string;
    sessionDate: string;
    link: string;
}) {
    try {
        const cleaned = sessionDate.replace("India", "").trim();

        const [rawDate, time] = cleaned.split(/(?<=\d{4})\s/); // Split after the year

        const newdate = rawDate.replace(/(\d+)(st|nd|rd|th)/, "$1");

        console.log("masterclass", masterclass);
        const response = await fetch("", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                apiKey: apiKey,
                campaignName: campaignName,
                destination: phone,
                userName: name,
                templateParams: ["$FirstName", masterclass, newdate, time, link],
                source: "registration form",
                paramsFallbackValue: {
                    FirstName: "user",
                    value: "fallback value",
                },
                media: {},
                buttons: [],
                carouselCards: [],
                location: {},
                attributes: {},
            }),
        });

        if (!response.ok) {
            const err = await response.json();
            console.error("WhatsApp API error:", err);
            throw new Error("WhatsApp message sending failed");
        }

        //       // console.log('WhatsApp message sent successfully!');
    } catch (error) {
        console.error("Error sending WhatsApp message:", error);
    }
}



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