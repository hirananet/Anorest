import { Module } from '@nestjs/common';
import { MysqlModule } from 'src/mysql/mysql.module';
import { LoginController } from './login.controller';

@Module({
  controllers: [LoginController],
  imports: [
    MysqlModule
  ]
})
export class LoginModule {}
