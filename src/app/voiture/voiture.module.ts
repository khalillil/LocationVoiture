import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Voiture {
  key:string;
  marque:string;
  type:string;
  image:string;
  carburant:string;
  mode:string;
  model:number;
  prix:number;
  gamme:string;
 }
