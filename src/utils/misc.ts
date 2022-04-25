export function getSessionIdFromSearchParams(): string | null {

    console.log(window.location.href);

    const searchParams = new URLSearchParams(window.location.search);
    const sessionId = searchParams.get('signSession');

    return sessionId;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(r => setTimeout(r, ms));
}