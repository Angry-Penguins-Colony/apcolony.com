export class GatewayLogger {

    private readonly fetchPrefix: string;
    private readonly cachePrefix: string;

    constructor(
        public shouldLog: boolean,
    ) {
        this.cachePrefix = '[+]' + ' Cache hit:';
        this.fetchPrefix = '[~]' + ' Fetching:';
    }

    public logFetch(message: string) {
        this.log(this.fetchPrefix + ' ' + message);
    }

    public log(message: string) {
        if (this.shouldLog == false) return;

        console.log(message);
    }
}