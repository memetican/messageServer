import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from '../services/quotes.service';

@Controller('messages')
export class MessagesController {

    constructor(private quotesService: QuotesService) {
    }

    @Get()
    getMessages() {
        return this.quotesService.getQuotes();
    }

    @Get(':id')
    getMessage(@Param('id') id) {
        return this.quotesService.getQuote(id);
    }

    // @Get()
    // getMessages() {
    //     return {
    //         message: 'In a real example, I would return all of the messages',
    //     };
    // }

    // @Get(':id')
    // getMessage(@Param('id') id) {
    //     return {
    //         message: `In a real example, I would return the message with an id of ${id}`,
    //     };
    // }

}
