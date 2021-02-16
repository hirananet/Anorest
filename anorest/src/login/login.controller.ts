import { Controller, Get, Param } from '@nestjs/common';
import { MysqlService } from 'src/mysql/mysql.service';

@Controller('')
export class LoginController {

    constructor(private mysqlSrv: MysqlService) {
        console.log('Connecting to database');
        this.mysqlSrv.connect().then(r => {
            console.log('Connected');
        }).catch(d => {
            console.log('Error');
        })
    }

    @Get('account/:nick')
    async account(@Param('nick') nick: string) {
        const resp = await this.mysqlSrv.query('SELECT nick, last_seen, last_usermask, last_quit, vhost_host, NS_NO_EXPIRE FROM anope_db_NickAlias WHERE nc = ?', [nick]);
        if(resp) {

            let out = 'Alias de ' + nick + ', <br/>';
            resp.forEach(element => {
                out += 'Nick: <b>'+ element.nick + '</b> LastConnect: '+element.last_seen+' UserMask: '+element.last_usermask + ' LastQuit: '+element.last_quit + ' vhost: ' + element.vhost_host + ' Expira?: ' + (element.NS_NO_EXPIRE === '1' ?  'NO' : '<span style="color: red">SI</span>') + ' <br />';
            });

            return out;
        } else {
            return;
        }
    }

    @Get('channels/:nick')
    async channels(@Param('nick') nick: string) {
        const resp = await this.mysqlSrv.query('SELECT name, time_registered, last_used, last_topic_setter, last_topic FROM anope_db_ChannelInfo WHERE founder = ?', [nick]);
        if(resp) {

            let out = 'Canales de ' + nick + ' <br/>';
            resp.forEach(element => {
                out += 'Canal: <b>'+ element.name + '</b> time_registered: '+element.time_registered+' last_used: '+element.last_used + ' last_topic_setter: '+element.last_topic_setter + ' topic: ' + element.last_topic + ' <br />';
            });

            return out;
        } else {
            return;
        }
    }

}
