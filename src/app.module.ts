import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { BrowserService } from './browser/browser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DosenModule } from './dosen/dosen.module';
import { Dosen } from './dosen/entities/dosen.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'ilham',
    password: 'adminerham24',
    database: 'fatek',
    entities: [Dosen],
    synchronize: true,
  }), DosenModule],
  controllers: [AppController],
  providers: [AppService, BrowserService],
})
export class AppModule {}
