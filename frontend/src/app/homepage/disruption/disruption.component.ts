import { Component, OnInit } from '@angular/core';
import {DisruptionDataService} from "./disruption-data.service";
import {Disruption} from "./disruption";
import {HttpErrorResponse} from "@angular/common/http";
import {Search} from "../search/search";

@Component({
  selector: 'app-disruption',
  templateUrl: './disruption.component.html',
  styleUrls: ['./disruption.component.css']
})
export class DisruptionComponent implements OnInit {

  private disruptions : Disruption[];
  public errorMsg : string;

  constructor(private _disruptionDataService : DisruptionDataService) { }

  ngOnInit() {
    this._disruptionDataService.disruptions.subscribe(
      (disruptions) => {
        this.disruptions = disruptions;
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve disruptions: ${error.error}`;
      }
    )
  }

}
