import { Injectable } from '@nestjs/common';
import { environment } from 'src/environment.local';

var mysql = require('mysql');

@Injectable()
export class MysqlService {

    private conn;
    private lastError: string;
    private connected: boolean = false;

    constructor() {
        this.conn = mysql.createConnection(environment.database);
    }

    connect(): Promise<void> {
        return new Promise<void>((res, rej) => {
            this.conn.connect((err) => {
                if(err) {
                    this.connected = false;
                    this.lastError = err;
                    rej(err);
                } else {
                    this.connected = true;
                    res();
                }
            });
        });
    }

    public isConnected() {
        return this.connected;
    }

    query(q: string, values?: any[]): Promise<any> {
        return new Promise<void>((res, rej) => {
            this.conn.query(q, values, (err, resp) => {
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
