export function getSessionIdFromSearchParams(): string | null {

    const searchParams = new URLSearchParams(window.location.search);
    const sessionId = searchParams.get('sessionId');

    return sessionId;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
}