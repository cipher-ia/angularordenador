import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulario-ordenador',
  imports: [FormsModule],
  templateUrl: './formulario-ordenador.component.html',
  styleUrl: './formulario-ordenador.component.scss'
})
export class FormularioOrdenadorComponent {

  ordenador:Ordenador= {} as Ordenador;

  constructor(private ordenadorRestService:OrdenadorRestService,private router:Router){

    

  }

  public insertar(){

    //console.log(this.libro)

    this.ordenadorRestService.insertar(this.ordenador).subscribe((datos)=>{

      console.log("insertado");
      this.router.navigate(["/paginacion"]);

    })


  }

}
