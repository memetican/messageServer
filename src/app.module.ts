import { Module, HttpService } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { MessagesController } from './messages/messages.controller';
import { QuotesService } from './services/quotes/quotes.service';
// import { Injectable, HttpService } from '@nestjs/common';
// import { map } from 'rxjs/operators';

@Module({
  imports: [
    // QuotesService,
    // TypeOrmModule.forFeature([
    //   UserEntity,
    // ]),
  ],
  controllers: [AppController, MessagesController],
  providers: [AppService, QuotesService, HttpService],
//  exports: [HttpService],
})
export class AppModule {}
