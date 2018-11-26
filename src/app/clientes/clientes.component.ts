import { Component, OnInit } from '@angular/core';

import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteService:ClientesService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      }
    );
  }

  delete(cliente:Cliente):void{
    swal({
      title: 'Esta seguro?',
      text: `Eliminar al cliente ${cliente.nombre}. No es posible deshacer este cambio!`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar archivo!'
    }).then((result) => {
      if (result.value) {
        this.clienteService.delete(cliente.id)
          .subscribe(
            respuesta => {
              this.clientes = this.clientes.filter(cli => cli != cliente);
            swal(
              'Borrado!',
              `El cliente ${cliente.nombre} ha sido borrado con exito.`,
              'success'
            )
          }
          );
      }
    });
  }

}
