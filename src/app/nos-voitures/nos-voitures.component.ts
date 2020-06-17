import { Component, OnInit } from '@angular/core';
import { VoitserviceService } from '../voiture/voitservice.service';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-nos-voitures',
  templateUrl: './nos-voitures.component.html',
  styleUrls: ['./nos-voitures.component.scss']
})
export class NosVoituresComponent implements OnInit {
  voitureList:any;
  constructor(private voitureService:VoitserviceService) { }

  ngOnInit(): void {
    this.getVoitList();
  }
  getVoitList(){
    this.voitureService.getVoitList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(voitures => {
      this.voitureList = voitures;
    });
  }

  hh(){
    var hh=this.voitureService.hh();
    console.log(this.voitureList);
  }
}
