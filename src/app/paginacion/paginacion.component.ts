import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-paginacion',
  imports: [RouterLink],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.scss'
})
export class PaginacionComponent {

  ordenadores:Ordenador[]=[];
  ordenador:Ordenador={} as Ordenador;
  serie:Ordenador[]=[];


  constructor(private ordenadorRestService:OrdenadorRestService, private route:ActivatedRoute){

     

  }

  ngOnInit (){

    console.log(this.route.snapshot.paramMap.get("serie"));
    let serie= this.route.snapshot.paramMap.get("serie");

    if(serie){

      this.ordenadorRestService.buscarUno(serie).subscribe((datosordenador)=> {

        this.ordenador=datosordenador;

      })

    } else {

      this.ordenadorRestService.buscarTodos().subscribe((datosordenador)=> {

        this.ordenadores=datosordenador;
        console.log(datosordenador);

      })
    }


    
  }


  public borrar(serie: string) {
    this.ordenadorRestService.borrar(serie).subscribe(() => {
      console.log(`Ordenador con Número de serie ha sido eliminado: ${serie}`)
    })
  }
}
