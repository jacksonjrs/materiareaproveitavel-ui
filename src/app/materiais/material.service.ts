import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Material, Page  } from '../core/model';

import { firstValueFrom } from 'rxjs';

export interface MaterialFiltro {
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  materiaisUrl: string

  constructor(private http: HttpClient) {
    this.materiaisUrl = `${environment.apiUrl}/materiais`
  }


  pesquisar(filtro: MaterialFiltro): Promise<any> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams();

    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }

    return firstValueFrom(this.http.get(`${this.materiaisUrl}?resumo`, { headers, params }))
      .then((response: any) => response['content']);
  }

  adicionar(pessoa: Material): Promise<Material> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');


    return firstValueFrom(this.http.post<Material>(this.materiaisUrl, pessoa, { headers }));

  }

  atualizar(material: Material): Promise<Material> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.put<Material>(`${this.materiaisUrl}/${material.id}`, material, { headers }));
  }

  buscarPorCodigo(id: number): Promise<Material> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return firstValueFrom(this.http.get<Material>(`${this.materiaisUrl}/${id}`, { headers }));
  }

  mudarStatus(id: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
      .append('Content-Type', 'application/json');

    return firstValueFrom(this.http.put<void>(`${this.materiaisUrl}/${id}/ativo`, ativo, { headers }));

  }

}
