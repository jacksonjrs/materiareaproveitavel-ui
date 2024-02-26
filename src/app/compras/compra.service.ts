import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Compras, Material, Page  } from '../core/model';

import { firstValueFrom } from 'rxjs';

export interface ComprasFiltro {
  nome: string;
}


@Injectable({
  providedIn: 'root'
})
export class CompraService {

  comprasUrl: string

  constructor(private http: HttpClient) {
    this.comprasUrl = `${environment.apiUrl}/compras`
  }

  pesquisar(filtro: ComprasFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams();

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return firstValueFrom(this.http.get(`${this.comprasUrl}?resumo`, { headers, params }))
      .then((response: any) => response['content']);
  }

  comprar(compras: Compras): Promise<Compras> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.post<Compras>(`${this.comprasUrl}`, compras, { headers }));
  }

}
