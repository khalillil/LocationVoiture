import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, } from '@angular/fire/database';
import { Voiture } from './voiture.module';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class VoitserviceService {

  private dbPath="/voitures";
  voitureRef: AngularFireList<Voiture> = null;
  constructor(private db:  AngularFireDatabase) { 
    this.voitureRef = db.list(this.dbPath);
  }

  createVoit(voiture: Voiture): void {
    this.voitureRef.push(voiture);
  }
  

  
  deleteVoit(key: string): Promise<void> {
    return this.voitureRef.remove(key);
  }
  
  getVoitList(): AngularFireList<Voiture> {
    return this.voitureRef;
  }
  
  deleteAllVoit(): Promise<void> {
    return this.voitureRef.remove();
  }

hh(){
  return this.db.list("/voitures");
}

}
