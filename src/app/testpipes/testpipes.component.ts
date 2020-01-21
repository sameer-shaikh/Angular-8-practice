import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpipes',
  templateUrl: './testpipes.component.html',
  styleUrls: ['./testpipes.component.css']
})
export class TestpipesComponent implements OnInit {
  newcomponent = "Entered in new component created";
 
  constructor() { }

  ngOnInit() {
  }

}
