import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailNotifierService } from '../shared/email-notifier.service';
import { NotifierEvent } from '../shared/notifier-event.service';
import { NotifierController } from './notifier.controller';
import { NotifierService } from './notifier.service';

@Module({
  imports: [ConfigModule],
  controllers: [NotifierController],
  providers: [NotifierService, EmailNotifierService, NotifierEvent],
  exports: [NotifierService],
})
export class NotifierModule {}
