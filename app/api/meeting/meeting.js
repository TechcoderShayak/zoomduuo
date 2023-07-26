async function getMeeting() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY = 'mirotalk_default_secret';
        // $MIROTALK_URL = "http://localhost:3000/api/v1/meeting";
        MIROTALK_URL = 'https://p2p.mirotalk.com/api/v1/meeting';
        // $MIROTALK_URL = "https://mirotalk.up.railway.app/api/v1/meeting";

        const response = await fetch(MIROTALK_URL, {
            method: 'POST',
            headers: {
                authorization: API_KEY,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        console.log('meeting:', data.meeting);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getMeeting();
