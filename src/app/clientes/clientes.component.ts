import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[] = [
    {
      id: 1,
      nombre: "Sergio",
      apellido: "Piña",
      email: "cliente@hotmail.com",
      createAt: "2018-11-24"
    },
    {
      id: 2,
      nombre: "Sergio",
      apellido: "Piña",
      email: "cliente@hotmail.com",
      createAt: "2018-11-24"
    },
    {
      id: 3,
      nombre: "Sergio",
      apellido: "Piña",
      email: "cliente@hotmail.com",
      createAt: "2018-11-24"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
