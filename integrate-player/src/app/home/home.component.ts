import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myrout:Router) { }
  gotosear(){
this.myrout.navigate(['dashboardpage']);
  }
  gotofav(){
    this.myrout.navigate(['favpage'])

  }
  gotorec(){
    this.myrout.navigate(['Recpage'])

  }


  ngOnInit() {
  }

}
