import { Component, OnInit } from '@angular/core';
import { Marque } from 'src/app/marque/marque.module';
import { Voiture } from 'src/app/voiture/voiture.module';
import { MarqueService } from 'src/app/marque/marque.service';
import {  VoitserviceService} from 'src/app/voiture/voitservice.service';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  marque: Marque = new Marque();
  voiture :Voiture=new Voiture();
  submitted = false;
  voitSubmitted=false;
  marques: any;
  voitures:any;


  /* CONCERNANT LA VOITURE */
  selectedImage:any;
  selectedImageName:string;


  constructor(
    private marqueService: MarqueService,
    private voitureService :VoitserviceService,
    private storage:AngularFireStorage
    ) { }

  ngOnInit(): void {
    this.getMarquesList();
    this. getVoitList();
  }


/*   TOUS QUI CONCCERNE LA MARQUE */
  newMarque(): void {
    this.submitted = false;
    this.marque = new Marque();
  }
 
  save() {
    this.marqueService.createMarque(this.marque);
    this.marque = new Marque();
    
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

  getMarquesList(){
    this.marqueService.getMarquesList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(marques => {
      this.marques = marques;
    });
  }

  deleteMarque(keyMarque:any){
    
    this.marqueService
    .deleteMarque(keyMarque)
    .catch(err => console.log(err));
    this.getMarquesList();
  }
  deleteAll(){
    this.marqueService.deleteAll();
  }


  /*   END END END END TOUS QUI CONCCERNE LA MARQUE */


  /*   TOUS QUI CONCCERNE LA VOITURE */

  VoitSubmit(){
    /* this.saveVoit(); */
    console.log(this.voiture);

    /* image send to firebase storage */
    var filePath='/'+this.voiture.marque + '/'+this.selectedImageName +'_'+ new Date().getTime();
    const fileRef=this.storage.ref(filePath); 
    this.storage.upload(filePath,this.selectedImage).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe((url)=>{
          this.voiture.image=url;
          this.saveVoit();
          alert("Tout est Bien");
        })
         
      })
    ).subscribe();
    this.voitSubmitted=true;
  }
 
  saveVoit() {
    this.voitureService.createVoit(this.voiture)
    this.voiture=new Voiture();
    
  }
  changeFile(event:any){
    const file:File=event.target.files[0];
    this.selectedImage=file;
    this.selectedImageName=file.name;

  }

  getVoitList(){
    this.voitureService.getVoitList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(voitures => {
      this.voitures = voitures;
    });
  }


  deleteVoit(keyVoit:any){
    
    this.voitureService
    .deleteVoit(keyVoit)
    .catch(err => console.log(err));
    this.getVoitList();
  }
  deleteAllVoit(){
    this.voitureService.deleteAllVoit();
  }



}
