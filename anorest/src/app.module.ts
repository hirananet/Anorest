import { Module } from '@nestjs/common';
import { MysqlModule } from './mysql/mysql.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    MysqlModule,
    LoginModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
