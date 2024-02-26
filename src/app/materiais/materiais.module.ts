import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SharedModule } from '../shared/shared.module';
import { MateriaisRoutingModule } from './materiais-routing.module';

import { MaterialCadastroComponent } from './material-cadastro/material-cadastro.component';
import { MaterialGridComponent } from './material-grid/material-grid.component';
import { MateriaisPesquisaComponent } from './materiais-pesquisa/materiais-pesquisa.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,

    InputNumberModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    MateriaisRoutingModule
  ],
  declarations: [
    MaterialCadastroComponent,
    MateriaisPesquisaComponent,
    MaterialGridComponent
  ],
  exports: [
    MaterialCadastroComponent,
    MateriaisPesquisaComponent,
    MaterialGridComponent
  ]
})
export class MateriaisModule { }
