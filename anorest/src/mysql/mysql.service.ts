import { Injectable } from '@nestjs/common';
import { environment } from 'src/environment.default';

var mysql = require('mysql');

@Injectable()
export class MysqlService {

    private conn;
    private lastError: string;

    constructor() {
        this.conn = mysql.createConnection(environment.database);
    }

    connect(): Promise<void> {
        return new Promise<void>((res, rej) => {
            this.conn.connect((err) => {
                if(err) {
                    this.lastError = err;
                    rej(err);
                } else {
                    res();
                }
            });
        });
    }

    query(q: string): Promise<any> {
        return new Promise<void>((res, rej) => {
            this.conn.query(q, (err, resp) => {
                if(err) {
                    rej(err);
                } else {
                    res(resp)
                }
            });
        });
    }
    
    getLastError() {
        return this.lastError;
    }
}
