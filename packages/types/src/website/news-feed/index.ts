export const getNewsFeed = async (url: string, langid: string) => {
    const apiInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNza2V5IjoiNTAxMTQyIiwiZXhwIjoxNjkyNzEwMjE3fQ.YAkRGWBlXdwYLnsW2fiG_y9889ADzjD30OEzNg3or40'
        },
    }
    const response = await fetch(`${url}${langid}`, apiInit);
    if (!response.ok) {
        throw new Error('no data found')
    }
    const data = await response.json();
    return data;
}