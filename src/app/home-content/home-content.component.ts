import { Component, OnInit } from '@angular/core';
import { VoitserviceService } from '../voiture/voitservice.service';
import { map, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  voitureList:any;
  constructor( private voitureService:VoitserviceService) { }

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
}
