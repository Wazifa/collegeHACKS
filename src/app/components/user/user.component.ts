import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // public isCollapsed = false;
  constructor() {

    
   }

  ngOnInit() {
  }

}
