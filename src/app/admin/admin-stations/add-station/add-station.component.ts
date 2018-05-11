import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {StationDataService} from "../../../station/station-data.service";
import {Station} from "../../../station/Station.model";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  public errorMsg: string;

  private model : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _stationDataService : StationDataService
  ) {
    this.model = this.fb.group({
      name: ['',
        [Validators.required],
        this.serverSideValidateName()
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

  serverSideValidateName(): ValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any }> => {
      return this._stationDataService
        .checkStationNameAvailability(control.value)
        .pipe(
          map(available => {
            if (!available) {
              return null;
            }
            return { stationAlreadyExists: true };
          })
        );
    };
  }
}
