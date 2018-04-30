import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {DisruptionDataService} from "../../../disruption/disruption-data.service";
import {Disruption} from "../../../disruption/disruption";

@Component({
  selector: 'app-disruption-list',
  templateUrl: './disruption-list.component.html',
  styleUrls: ['./disruption-list.component.css']
})
export class DisruptionListComponent implements OnInit {
  private errorMsg : string;

  private _disruptions : Disruption[];

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

  deleteDisruption(disruption : Disruption) {
    this._disruptionDataService.removeDisruption(disruption).subscribe();
  }

}
