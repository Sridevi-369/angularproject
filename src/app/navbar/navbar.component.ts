import { Component, OnInit } from '@angular/core';
var name="sri"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sri:string="sri's cake gallery"
  name:string=name
  searchbutton:string="search"

  search(){

    alert("searched")

  }
  constructor() { }
  
  ngOnInit(): void {
  }

}
