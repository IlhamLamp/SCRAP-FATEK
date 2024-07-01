import { Module } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';
import { ScrapperController } from './scrapper.controller';
import { BrowserService } from 'src/browser/browser.service';

@Module({
  providers: [ScrapperService],
  controllers: [ScrapperController, BrowserService]
})
export class ScrapperModule {}
