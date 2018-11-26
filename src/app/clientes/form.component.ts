import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private cliente:Cliente = new Cliente();
  private titulo:string = "Crear cliente";

  constructor(private clientesService:ClientesService,
    private router:Router) {
  }

  ngOnInit() {
  }

  public create():void{
    console.log("Clicked");
    console.log(this.cliente);
    this.clientesService.create(this.cliente)
      .subscribe(
      respuesta => {
        swal("Nuevo cliente",
          `Cliente ${this.cliente.nombre} creado con exito!`,
          'success')
        this.router.navigate(["/clientes"]);
      })
    ;
  }

}
