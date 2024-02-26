import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from '../shared/shared.module';

import { ComprasRoutingModule } from './compras-routing.module';

import { ComprasPesquisaComponent } from './compras-pesquisa/compras-pesquisa.component';
import { ComprasCadastroComponent } from './compras-cadastro/compras-cadastro.component';



@NgModule({
  declarations: [
    ComprasPesquisaComponent,
    ComprasCadastroComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    SharedModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    ComprasRoutingModule
  ],
    exports: [
    ComprasCadastroComponent,
    ComprasPesquisaComponent
  ]
})
export class ComprasModule { }
