import { HttpService } from '@nestjs/common';
export declare class QuotesService {
    private http;
    constructor(http: HttpService);
    getQuotes(): import("rxjs").Observable<any>;
    getQuote(id: any): import("rxjs").Observable<any>;
    getRandomQuote(): import("rxjs").Observable<any>;
}
