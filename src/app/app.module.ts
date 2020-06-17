import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { AproposComponent } from './apropos/apropos.component';
import { NosVoituresComponent } from './nos-voitures/nos-voitures.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PanelComponent } from './auth/panel/panel.component';
import { PanelLoginComponent } from './auth/panel-login/panel-login.component';
import { environment } from 'src/environments/environment';
import {FormsModule} from '@angular/forms'

import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    NosServicesComponent,
    AproposComponent,
    NosVoituresComponent,
    ContactComponent,
    Error404Component,
    GalleryComponent,
    PanelComponent,
    PanelLoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
