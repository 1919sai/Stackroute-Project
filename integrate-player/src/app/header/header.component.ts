import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyrouteService } from '../myroute.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private myserve:MyrouteService,private rt:Router) { }

  ngOnInit() {
  }


  
}
