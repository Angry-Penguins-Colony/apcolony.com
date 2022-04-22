export function getSessionIdFromSearchParams(): string | null {

    const searchParams = new URLSearchParams(window.location.search);
    const sessionId = searchParams.get('sessionId');

    return sessionId;
}