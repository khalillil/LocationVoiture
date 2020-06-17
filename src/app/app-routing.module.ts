import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { NosVoituresComponent } from './nos-voitures/nos-voitures.component';
import { Error404Component } from './error404/error404.component';
import { PanelComponent } from './auth/panel/panel.component';
import { PanelLoginComponent } from './auth/panel-login/panel-login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './auth/register/register.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {path: "apropos" ,component : AproposComponent},
  {path: "contact" ,component : ContactComponent},
  {path: "" ,redirectTo : 'home' , pathMatch:'full'},
  {path: "home" ,component : HomeContentComponent},
  {path: "nosServices" ,component : NosServicesComponent},
  {path: "nosVoitures" ,component : NosVoituresComponent},
  {path: "error" ,component : Error404Component},
  {
    path: "panelAdd" ,
    component : PanelComponent,
   /*  canActivate:[AuthGuard], */
    
  }
    ,
  {path: "panelRegister" ,component : RegisterComponent},
  {path: "panelLogin" ,component : PanelLoginComponent},
  {path: "gallery" ,component : GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
