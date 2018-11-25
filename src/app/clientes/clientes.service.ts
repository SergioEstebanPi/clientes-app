import { Injectable } from '@angular/core';

import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes:Cliente[];
  private urlEndpoint:string = "http://localhost:8080/api/clientes";

  constructor(private http: HttpClient) {
  }

  getClientes():Observable<Cliente[]>{
    //return of(CLIENTES);
    return this.http.get<Cliente[]>(
      this.urlEndpoint
    );
  }
}
