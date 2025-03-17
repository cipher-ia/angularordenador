import { Component } from '@angular/core';
import { Ordenador } from '../ordenador';
import { OrdenadorRestService } from '../ordenador-rest.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgFor, DecimalPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-paginacion',
  imports: [RouterLink,NgFor,DecimalPipe],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.scss'
})
export class PaginacionComponent {


  ordenadores:Ordenador[]=[];
  ordenador:Ordenador={} as Ordenador;
  serie:Ordenador[]=[];
  inicio:number = 0;
  elementos: number = 5;
  hayMasElementos: boolean = true;


  constructor(private ordenadorRestService:OrdenadorRestService, private route:ActivatedRoute){

     

  }

  ngOnInit (){

    console.log(this.route.snapshot.paramMap.get("serie"));
    let serie= this.route.snapshot.paramMap.get("serie");


    this.cargarElementos();

    




    if(serie){

      this.ordenadorRestService.buscarUno(serie).subscribe((datosordenador)=> {

        this.ordenador=datosordenador;

      })

    }


    
  }
  cargarElementos() {
    let offset = this.inicio * this.elementos;
    this.ordenadorRestService.mostrarElementos(offset, this.elementos).subscribe((datosordenador)=>{

      this.ordenadores = datosordenador;
      this.hayMasElementos = datosordenador.length === this.elementos;

    })
  }


  public borrar(serie: string) {
    this.ordenadorRestService.borrar(serie).subscribe(() => {
      console.log(`Ordenador con Número de serie ha sido eliminado: ${serie}`);
      
      this.ordenadorRestService.buscarTodos().subscribe((datosordenador) => {
        this.ordenadores = datosordenador;
      });
    });
}

paginaSiguiente() {
  if (this.hayMasElementos) {
    this.inicio++;
    this.cargarElementos();
  }
}


paginaAnterior() {
  if (this.inicio > 0) {
    this.inicio--;
    this.cargarElementos();
  }
}
}
