import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { Marque } from './marque.module';

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private dbPath="/marques";
  marqueRef: AngularFireList<Marque> = null;
  constructor(private db: AngularFireDatabase) { 
    this.marqueRef = db.list(this.dbPath);
  }

  createMarque(marque: Marque): void {
    this.marqueRef.push(marque);
  }
  

  
  deleteMarque(key: string): Promise<void> {
    return this.marqueRef.remove(key);
  }
  
  getMarquesList(): AngularFireList<Marque> {
    return this.marqueRef;
  }
  
  deleteAll(): Promise<void> {
    return this.marqueRef.remove();
  }
  }

