import { Component, OnInit } from '@angular/core';
import {Station} from "../../station/Station.model";
import {StationDataService} from "../../station/station-data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Search} from "./search";
import {SearchDataService} from "./search-data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public errorMsg: string;

  private _stations: Station[];
  private model : Search = new Search(new Station(""),new Station(""), new Date());

  constructor(
    private _searchDataService: SearchDataService,
    private _stationDataService: StationDataService) { }

  ngOnInit() : void {
    this._stationDataService.stations.subscribe(
      (stations) => {
        this._stations = stations;
        this.model = new Search(this._stations[0], this._stations[0], new Date());
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve stations: ${error.error}`;
      }
    )
  }

  get stations() {
    return this._stations;
  }

  onSubmit() {
    const search =  new Search(this.model.toStation,this.model.fromStation,this.model.dateTime);
    this._searchDataService.getRoutes(search).subscribe(
      (data) => (console.log(data)),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve stations: ${error.error}`;
      }
    );
  }
}
