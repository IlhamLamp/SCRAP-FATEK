import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { DosenModule } from './dosen/dosen.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dosen } from './dosen/entities/dosen.entity';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Dosen],
      synchronize: true,
    }), 
    DosenModule, AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
