import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { ComprasPesquisaComponent } from './compras-pesquisa/compras-pesquisa.component';
import { ComprasCadastroComponent } from './compras-cadastro/compras-cadastro.component';

const routes: Routes = [
  { path: 'compras', component: ComprasPesquisaComponent },
  { path: 'compras/nova', component: ComprasCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
