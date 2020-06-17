import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: ['./panel-login.component.scss']
})
export class PanelLoginComponent implements OnInit {

  errorAuth:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.errorAuth=this.auth.eventAuthError$.subscribe(data=>{
        this.errorAuth=data;
    })
  }

  loginUser(frm){
  this.auth.login(frm.value.email,frm.value.password);
  }
}
