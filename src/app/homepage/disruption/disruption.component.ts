import { Component, OnInit } from '@angular/core';
import {DisruptionDataService} from "../../disruption/disruption-data.service";
import {Disruption} from "../../disruption/disruption";
import {HttpErrorResponse} from "@angular/common/http";
import {Search} from "../search/search";

@Component({
  selector: 'app-disruption',
  templateUrl: './disruption.component.html',
  styleUrls: ['./disruption.component.css']
})
export class DisruptionComponent implements OnInit {

  private _disruptions : Disruption[];
  public errorMsg : string;

  constructor(private _disruptionDataService : DisruptionDataService) { }

  ngOnInit() {
    this._disruptionDataService.events$.forEach(event => this.reloadDisruptions());
    this.reloadDisruptions();
  }

  reloadDisruptions() {
    this._disruptionDataService.disruptions.subscribe(
      (disruptions) => {
        this._disruptions = disruptions;
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve disruptions: ${error.error}`;
      }
    )
  }

  get disruptions() {
    return this._disruptions;
  }

}
