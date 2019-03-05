import { QuotesService } from '../services/quotes.service';
export declare class MessagesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getMessages(): import("rxjs").Observable<any>;
    getMessage(id: any): import("rxjs").Observable<any>;
}
