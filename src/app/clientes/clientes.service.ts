import { Injectable } from '@angular/core';

import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes:Cliente[];

  constructor() {
  }

  getClientes():Observable<Cliente[]>{
    return of(CLIENTES);
  }
}
