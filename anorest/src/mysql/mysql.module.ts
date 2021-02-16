import { MysqlService } from './mysql.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [
        MysqlService
    ]
})
export class MysqlModule {}
