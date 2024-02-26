import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { CoreModule } from './core/core.module';
import { MateriaisModule } from './materiais/materiais.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { ComprasModule } from './compras/compras.module';
import { SegurancaModule } from './seguranca/seguranca.module';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,


    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    InputNumberModule,
    InputMaskModule,

    SelectButtonModule,
    TabViewModule,
    TableModule,
    TabViewModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,

    CoreModule,
    MateriaisModule,
    PessoasModule,
    ComprasModule,
    SegurancaModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
