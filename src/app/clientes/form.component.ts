import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClientesService } from './clientes.service';
import { Router } from '@angular/router';

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
        this.router.navigate(["/clientes"]);
      })
    ;
  }

}
