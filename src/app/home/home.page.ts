import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email:string;
  pwd:string;

  constructor(
    public fs:AngularFirestore,
    public af:AngularFireAuth,
    public nav:NavController
  ) {}

  login(){
    this.af.auth.signInWithEmailAndPassword(this.email,this.pwd).then(()=>{
      this.nav.navigateRoot('/main');
    }).catch(err=>{
      alert(err.message);
    })
  }
  goto_signup(){
    this.nav.navigateForward('/signup');
  }

}
