import { Component, OnInit } from '@angular/core';
import {Station} from "../../station/Station.model";
import {StationDataService} from "../../station/station-data.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Search} from "./search";
import {SearchDataService} from "./search-data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public errorMsg: string;

  private _stations: Station[];
  private model : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _searchDataService: SearchDataService,
    private _stationDataService: StationDataService
  ) { }

  ngOnInit() : void {
    this._stationDataService.stations.subscribe(
      (stations) => {
        this._stations = stations;
        this.model.controls['toStation'].patchValue(this._stations[0]);
        this.model.controls['fromStation'].patchValue(this._stations[0]);
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve stations: ${error.error}`;
      }
    )

    this.model = this.fb.group({
      fromStation: ['',
        [Validators.required]
      ],
      toStation: ['',
        [Validators.required]
      ],
      date: ['',
        [Validators.required,Validators.minLength(10)]
      ]
    });
  }

  onDateChange(date) {
    this.model.controls['date'].patchValue(new Date(date));
  }

  get stations() {
    return this._stations;
  }

  onSubmit() {
    const search =  new Search(this.model.value.toStation,this.model.value.fromStation,this.model.value.date);
    this._searchDataService.getRoutes(search).subscribe(
      (()=>{}),
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve stations: ${error.error}`;
      }
    );
  }
}
