import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute , Params} from '@angular/router';
@Component({
  selector: 'app-rout2',
  templateUrl: './rout2.component.html',
  styleUrls: ['./rout2.component.css']
})
export class Rout2Component implements OnInit {

  constructor(private rout2: ActivatedRoute ) { }
id;
name;

  ngOnInit() {
this.rout2.params.subscribe((params: Params) => {
  this.id = params['id'],
  this.name = params['name'];

 });
 alert(this.name);
  }


}
