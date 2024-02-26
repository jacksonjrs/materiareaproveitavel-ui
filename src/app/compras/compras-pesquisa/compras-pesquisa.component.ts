import { Component, OnInit } from '@angular/core';
import { CompraService } from '../compra.service';

@Component({
  selector: 'app-compras-pesquisa',
  templateUrl: './compras-pesquisa.component.html',
  styleUrls: ['./compras-pesquisa.component.css']
})
export class ComprasPesquisaComponent {

/*  compras = [
    { tipo: 'DESPESA', descricao: 'Muita areia branca', dataCriacao: '30/06/2017',
      dataEntrega: null, valor: 4.55, nome: 'Arthur Lima' },
    { tipo: 'RECEITA', descricao: 'Britas cinzas e azuis', dataCriacao: '10/06/2017',
      dataEntrega: '09/06/2017', valor: 80000, nome: 'João Alvarenga' },
    { tipo: 'DESPESA', descricao: 'Tinta suvinil branco gelo', dataCriacao: '20/07/2017',
      dataEntrega: null, valor: 14312, nome: 'Gilberto Neves' },
    { tipo: 'RECEITA', descricao: 'Ferros para armação', dataCriacao: '05/06/2017',
      dataEntrega: '30/05/2017', valor: 800, nome: 'Mauricio Nogueira' },
    { tipo: 'DESPESA', descricao: 'Madeira para escoramento', dataCriacao: '18/08/2017',
      dataEntrega: null, valor: 55000, nome: 'Carlo Lonrezzo' }

  ];
*/
  nome: string = '';
  compras: any[] = [];


  constructor(private compraService: CompraService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.compraService.pesquisar({ nome: this.nome })
      .then(compras => this.compras = compras);
  }

}
