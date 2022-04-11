export class GatewayLogger {

    private readonly fetchPrefix: string;
    private readonly cachePrefix: string;

    constructor(
        public shouldLog: boolean,
    ) {
        this.cachePrefix = '[+]'.green + ' Cache hit:';
        this.fetchPrefix = '[~]'.yellow + ' Fetching:';
    }

    public logFetch(message: string) {
        this.log(this.fetchPrefix + ' ' + message);
    }

    public logCache(message: string) {
        this.log(this.cachePrefix + ' ' + message);
    }

    public log(message: string) {
        if (this.shouldLog == false) return;

        console.log(message);
    }
}