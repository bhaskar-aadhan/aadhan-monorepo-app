export const getJob = async (
    url: string,
    jobId: string
) => {
    const apiInit = {
        method: 'GET'
    }
    const response = await fetch(`${url}jobs/${jobId}`, apiInit);
    if (!response.ok) {
        throw new Error('no data found')
    }
    const data = await response.json();
    return data;
}
