import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordenador } from './ordenador';


@Injectable({
  providedIn: 'root'
})
export class OrdenadorRestService {

  constructor(private httpClient:HttpClient) {}

  public buscarTodos():Observable<Ordenador[]>{

    return this.httpClient.get<Ordenador[]>("http://localhost:8080/webapi/ordenador")


  }

  public insertar(ordenador:Ordenador):Observable<Ordenador[]>{

    return this.httpClient.post<Ordenador[]>("http://localhost:8080/webapi/ordenador", ordenador)


  }

  public buscarUno(serie:String):Observable<Ordenador>{

    return this.httpClient.get<Ordenador>(`http://localhost:8080/webapi/ordenador/${serie}`);


  }

  public borrar(serie:string):Observable<void>{

    return this.httpClient.delete<void>(`http://localhost:8080/ordenador/${serie}`);

  }

}
