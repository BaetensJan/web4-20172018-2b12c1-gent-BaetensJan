import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StationDataService} from "../../../station/station-data.service";
import {Station} from "../../../station/Station.model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {
  public errorMsg: string;

  private model : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _stationDataService : StationDataService
  ) {
    this.model = this.fb.group({
      name: ['',
        [Validators.required]
      ],
      date: ['',
        [Validators.required]
      ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const station = new Station(this.model.value.name);

    this._stationDataService.addNewStation(station).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding station for ${
          station.naam
          }: ${error.error}`;
      }
    );
  }

}
