import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { BigCardComponent } from './pages/big-card/big-card.component';
import { HeaderTopComponent } from './pages/header-top/header-top.component';
import { HeaderComponent } from './pages/header/header.component';
import { ChamezapComponent } from './pages/chamezap/chamezap.component';
import { AboutComponent } from './pages/about/about.component';
import { MoreaboutComponent } from './pages/moreabout/moreabout.component';
import { PlanosComponent } from './pages/planos/planos.component';
import { StreamingComponent } from './pages/streaming/streaming.component';
import { ConcorrenciaComponent } from './pages/concorrencia/concorrencia.component';
import { InfoComponent } from './pages/info/info.component';
import { ColaboradoresComponent } from './pages/colaboradores/colaboradores.component';
import { SacComponent } from './pages/sac/sac.component';
import { RodapeComponent } from './pages/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BigCardComponent,
    HeaderComponent,
    HeaderTopComponent,
    ChamezapComponent,
    AboutComponent,
    MoreaboutComponent,
    PlanosComponent,
    StreamingComponent,
    ConcorrenciaComponent,
    InfoComponent,
    ColaboradoresComponent,
    SacComponent,
    RodapeComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
  ],
  providers: [provideNgxMask({})],
  bootstrap: [AppComponent]
})
export class AppModule { }
