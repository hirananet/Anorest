import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moderacion',
  templateUrl: './moderacion.component.html',
  styleUrls: ['./moderacion.component.scss']
})
export class ModeracionComponent implements OnInit {

  public moderaciones: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
