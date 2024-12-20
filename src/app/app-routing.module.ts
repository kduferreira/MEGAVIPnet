import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PlanosComponent } from './pages/planos/planos.component';
//import { AcessoUsuarioComponent } from './pages/acesso-usuario/acesso-usuario.component';
//import { CardapioPageComponent } from './pages/cardapio-page/cardapio-page.component';


const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path: 'planos', component: PlanosComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
