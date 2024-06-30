import { Module } from '@nestjs/common';
import { DataDosenModule } from './data-dosen/data-dosen.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BrowserService } from './browser/browser.service';

@Module({
  imports: [ DataDosenModule],
  controllers: [ AppController ],
  providers: [ AppService, BrowserService ],
})
export class AppModule {}
