import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/fireStore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<String>("");

  eventAuthError$=this.eventAuthError.asObservable(); 

  newUser:any;
  public isLoggedIn=false;

  constructor(
    private afAuth:AngularFireAuth,
    private db:AngularFirestore,
    private router:Router) { }



login(email:string,password:string){
  this.afAuth.signInWithEmailAndPassword(email,password)
  
  .catch(error=>{
    this.eventAuthError.next(error);
    this.isLoggedIn=true;
  })
  .then(userCredential=>{
    if(userCredential){
      this.isLoggedIn=true;
      this.router.navigate(['/panelAdd'])
    }
  })

}


    createUser(user){
    
        this.afAuth.createUserWithEmailAndPassword(user.email , user.password)
        .then(()=>{
          
          this.newUser=user;
          this.router.navigate(['/home']);
         
          /* userCredential.user.updateProfile({
            displayName:user.firstName + ' ' + user.lastName
          }); */

        /*   this.insertUserData(userCredential)
          .then(()=>{
           
              this.router.navigate(['/home']);
          }); */

        })
        .catch( error=>{
            this.eventAuthError.next(error);
            console.log(this.eventAuthError);
        })
    }

   /*  insertUserData(userCredential: firebase.auth.UserCredential){
     
      return this.db.doc('Users/${userCrendential.user.uid}').set({
        
        
        role :'network user'
      }) */
      
      
    }

