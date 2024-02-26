import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';


import { MaterialService } from '../material.service'
import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { CompraService } from 'src/app/compras/compra.service';

@Component({
  selector: 'app-materiais-pesquisa',
  templateUrl: './materiais-pesquisa.component.html',
  styleUrls: ['./materiais-pesquisa.component.css']
})
export class MateriaisPesquisaComponent  implements OnInit{

  nome: string = '';
  materiais: any[] = [];


  constructor(
    private pessoaService: PessoaService,
    private materialService: MaterialService,
    private compraService: CompraService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    ) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.materialService.pesquisar({ nome: this.nome })
      .then(materiais => this.materiais = materiais);
  }

  comprar(material: any): void{

    this.compraService.comprar(material);
    this.inativarMaterial(material)
  }

  inativarMaterial(material: any): void {
    const novoStatus = false;

    this.materialService.mudarStatus(material.id, novoStatus)
      .then(() => {

        material.ativo = novoStatus;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
