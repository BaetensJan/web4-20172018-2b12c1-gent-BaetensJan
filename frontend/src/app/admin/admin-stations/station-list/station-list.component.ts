import { Component, OnInit } from '@angular/core';
import {Station} from "../../../station/Station.model";
import {StationDataService} from "../../../station/station-data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Search} from "../../../homepage/search/search";
import {Disruption} from "../../../disruption/disruption";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  public errorMsg: string;

  private _stations: Station[];

  constructor(private _stationDataService: StationDataService) { }

  ngOnInit() {
    this._stationDataService.events$.forEach(event => this.reloadStations());
    this.reloadStations();
  }

  reloadStations () {
    this._stationDataService.stations.subscribe(
      (stations) => {
        this._stations = stations;
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve stations: ${error.error}`;
      }
    )
  }

  get stations() {
    return this._stations;
  }

  deleteStation(station : Station) {
    this._stationDataService.removeStation(station).subscribe();
  }

}
