import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CuriosidadesComponent } from './components/curiosidades/curiosidades.component';

import {MatTabsModule} from '@angular/material/tabs';
import { NavTabComponent } from './components/nav-tab/nav-tab.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GanhadoresComponent} from './components/ganhadores/ganhadores.component';
import { ModalidadesComponent } from './components/modalidades/modalidades.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { CuriosidadesCardComponent } from './components/curiosidades-card/curiosidades-card.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavTabComponent,
    GanhadoresComponent,
    ModalidadesComponent,
    CuriosidadesComponent,
    NavTabComponent,
    CuriosidadesCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
