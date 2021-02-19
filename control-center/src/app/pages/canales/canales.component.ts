import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canales',
  templateUrl: './canales.component.html',
  styleUrls: ['./canales.component.scss']
})
export class CanalesComponent implements OnInit {

  public canales: any[] = [
    {
      id: '',
      name: '#probando',
      time_registered: '10101010',
      last_used: '10101010',
      last_topic_time: '10101010',
      last_topic_setter: '10101010',
      last_topic: '10101010'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
