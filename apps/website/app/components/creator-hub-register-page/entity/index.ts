export const verifyInfluencer = async (
    url: string,
    email: string
) => {
    const apiInit = {
        method: 'GET'
    }
    const response = await fetch(`${url}influencer_application/verify?email=${email}`, apiInit);
    const statusCode = response.status
    console.log('statusCode: ', statusCode)
    if (!response.ok) {
        throw new Error('You have already applied for this influencer form or unable to verifying your application.');
    }
    return statusCode;
}