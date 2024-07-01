import { Module } from '@nestjs/common';
import { DataDosenModule } from './data-dosen/data-dosen.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BrowserService } from './browser/browser.service';
import { ScrapperModule } from './scrapper/scrapper.module';

@Module({
  imports: [ DataDosenModule, ScrapperModule],
  controllers: [ AppController ],
  providers: [ AppService, BrowserService ],
})
export class AppModule {}
