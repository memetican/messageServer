import { QuotesService } from '../services/quotes.service';
import { MessageDto } from './message.dto';
export declare class MessagesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    getMessages(): import("rxjs").Observable<any>;
    getMessage(id: any): import("rxjs").Observable<any>;
    createMessage(message: MessageDto): MessageDto;
}
