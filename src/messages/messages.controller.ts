import { Controller, Get, Param } from '@nestjs/common';
//import { QuotesService } from '../services/quotes/quotes.service';

@Controller('messages')
export class MessagesController {

    //private quotesService: QuotesService
    constructor() {
    }

    // @Get()
    // getMessages() {
    //     return this.quotesService.getQuotes();
    // }

    // @Get(':id')
    // getMessage(@Param('id') id) {
    //     return this.quotesService.getQuote(id);
    // }

    @Get()
    getMessages() {
      return {
          message: '1In a real example, I would return all of the messages',
      };
    }

    @Get(':id')
    getMessage(@Param('id') id) {
        return {
            message: `2In a real example, I would return the message with an id of ${id}`,
        };
    }

}
