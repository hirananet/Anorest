import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alias',
  templateUrl: './alias.component.html',
  styleUrls: ['./alias.component.scss']
})
export class AliasComponent implements OnInit {

  public alias: any = [
    {
      nick: 'Alesx',
      last_quit: 'ASD',
      last_usermask: 'qweqwewqewq',
      time_registered: 'qweqweqw',
      last_seen: '',
      NS_NO_EXPIRE: '1',
      vhost_creator: 'Gabriela-'
    },
    {
      nick: 'Alesx',
      last_quit: 'ASD',
      last_usermask: 'qweqwewqewq',
      time_registered: 'qweqweqw',
      last_seen: '',
      NS_NO_EXPIRE: '1',
      vhost_creator: 'Gabriela-'
    },
    {
      nick: 'Alesx',
      last_quit: 'ASD',
      last_usermask: 'qweqwewqewq',
      time_registered: 'qweqweqw',
      last_seen: '',
      NS_NO_EXPIRE: '1',
      vhost_creator: 'Gabriela-'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
