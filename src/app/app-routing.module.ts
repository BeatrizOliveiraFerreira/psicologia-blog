import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home',component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'psicologia', component: PsicologiaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
