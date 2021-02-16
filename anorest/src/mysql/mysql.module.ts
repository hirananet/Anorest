import { MysqlService } from './mysql.service';
import { Module } from '@nestjs/common';

@Module({
    providers: [
        MysqlService
    ],
    exports: [
        MysqlService
    ]
})
export class MysqlModule {}
