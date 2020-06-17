import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database/database';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  imageDetailsList:AngularFireList<any>;
  constructor(private firebase:AngularFireDatabase){}

  getImageDet(){
    this.imageDetailsList =this.firebase.list('imageDet');
  }
  insertImageDet(imageDetails){
    this.imageDetailsList.push(imageDetails)
  }
}
    
