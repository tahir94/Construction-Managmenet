import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


   items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) { 
      // this.items = af.database.list('/items');
      // this.items.push({name : 'hello world'})
  }

  ngOnInit() {
  }

}
