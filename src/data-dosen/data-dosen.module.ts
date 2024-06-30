import { Module } from '@nestjs/common';
import { DataDosenController } from './data-dosen.controller';
import { DataDosenService } from './data-dosen.service';
import { BrowserService } from 'src/browser/browser.service';

@Module({
  controllers: [DataDosenController],
  providers: [DataDosenService, BrowserService]
})
export class DataDosenModule {}
