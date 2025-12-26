export const verifyJob = async (
    url: string,
    jobId: string,
    email: string
) => {
    const apiInit = {
        method: 'GET'
    }
    const response = await fetch(`${url}job_application/verify?job_id=${jobId}&email=${email}`, apiInit);
    const statusCode = response.status;
    // Let the caller handle 409 (already applied) without throwing here
    return statusCode;
}