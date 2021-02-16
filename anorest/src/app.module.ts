import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MysqlModule } from './mysql/mysql.module';

@Module({
  imports: [MysqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}