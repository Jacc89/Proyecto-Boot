import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-basic',
  templateUrl: './list-basic.component.html',
  styleUrls: ['./list-basic.component.scss']
})
export class ListBasicComponent implements OnInit {

  opcion: number= 0;
  constructor() { }

  ngOnInit(): void {
  }

  escogerOpcion(opcionEscogida: number){
    this.opcion = opcionEscogida;
  }

}
