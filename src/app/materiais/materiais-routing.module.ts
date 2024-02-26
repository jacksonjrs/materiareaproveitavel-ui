import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from './../seguranca/auth.guard';
import { MaterialCadastroComponent } from "./material-cadastro/material-cadastro.component";
import { MateriaisPesquisaComponent } from "./materiais-pesquisa/materiais-pesquisa.component";

const routes: Routes = [
  {
    path: 'materiais',
    component: MateriaisPesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_MATERIAL'] }
  },

  {
     path: 'materiais/novo',
     component: MaterialCadastroComponent,
     canActivate: [AuthGuard],
     data: { roles: ['ROLE_CADASTRAR_MATERIAL'] }
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MateriaisRoutingModule { }
