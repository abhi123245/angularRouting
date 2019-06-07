import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }
callrout1() {
this.router.navigate(['/rout2', 10 , 'abhilash']);
}
}
