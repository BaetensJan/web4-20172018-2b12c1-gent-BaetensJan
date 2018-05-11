import { Component, OnInit } from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {DisruptionComponent} from "./disruption/disruption.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  entryComponents: [
    SearchComponent,
    DisruptionComponent
  ]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
