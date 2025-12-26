export const getJobs = async (
    url: string,
    location: string = '',
    job_type: string = '',
    query: string = '',
    page: number = 1,
    per_page: number = 20
) => {
    const queryParams = new URLSearchParams({
        ...(location && { location }),
        ...(job_type && { job_type }),
        ...(query && { query }),
        page: page.toString(),
        per_page: per_page.toString()
    });
    const apiInit = {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
        }
    }
    const response = await fetch(`${url}jobs?${queryParams.toString()}`, apiInit);
    if (!response.ok) {
        throw new Error('no data found')
    }
    const data = await response.json();
    return data;
}