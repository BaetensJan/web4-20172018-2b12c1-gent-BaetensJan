import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StationDataService} from "../../../station/station-data.service";
import {Station} from "../../../station/Station.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Route} from "../../../route/route.model";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {StopPlaats} from "../../../route/stopplaats/stopPlaats.model";
import {RouteDataService} from "../../../route/route-data.service";
import {Disruption} from "../../../disruption/disruption";

function minLengthArray(min: number) {
  return (c: AbstractControl): {[key: string]: any} => {
    if (c.value.length >= min)
      return null;

    return { 'minLengthArray': {valid: false }};
  }
}

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {
  public errorMsg: string;

  private _stations : Station[];
  private model : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _stationDataService : StationDataService,
    private _routeDataService: RouteDataService
  ) {  }

  get stopPlaatsen(): FormArray {
    return <FormArray>this.model.get('stopPlaatsen');
  }

  get stations(): Station[]{
    return this._stations;
  }

  ngOnInit() {
    this._stationDataService.stations.subscribe(
      (stations) => {
        this._stations = stations;
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve stations: ${error.error}`;
      }
    );

    this.model = this.fb.group({
      name: ['',
        [Validators.required]
      ],
      date: ['',
        [Validators.required,Validators.minLength(10)]
      ],
      stopPlaatsen: this.fb.array([this.createStopPlaatsen()], minLengthArray(3))
    });

    this.stopPlaatsen.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(spList => {
        // if the last entry's name is typed, add a new empty one
        // if we're removing an entry's name, and there is an empty one after that one, remove the empty one
        const lastElement = spList[spList.length - 1];
        if (
          lastElement.station &&
          lastElement.uur &&
          lastElement.uur.length > 2
        ) {
          this.stopPlaatsen.push(this.createStopPlaatsen());
        } else if (spList.length >= 2) {
            const secondToLast = spList[spList.length - 2];
            if (
              !lastElement.station &&
              !lastElement.uur &&
              (!secondToLast.uur ||
                secondToLast.uur.length < 2)
            ) {
              this.stopPlaatsen.removeAt(this.stopPlaatsen.length - 1);
            }
        }
      });
  }

  createStopPlaatsen(): FormGroup {
    return this.fb.group({
      station: [''],
      uur: ['']
    });
  }

  onSubmit() {
    const route = new Route(this.model.value.name, this.model.value.date);
    for (const sp of this.model.value.stopPlaatsen) {
      if (sp.station && sp.uur.length > 2) {
        console.log(sp);
        const stopPlaats = new StopPlaats(
          sp.uur,
          sp.station
        );
        route.addStopPlaats(stopPlaats);
      }
    }
    this._routeDataService.addNewRoute(route).subscribe(
      () => {
        this.model.reset();
      },
      (error: HttpErrorResponse) => {
        if (error.status !== undefined) {
          this.errorMsg = `Error ${error.status} while adding route for ${
            route.naam
            }: ${error.error}`;
        }
        this.model.reset();
      }
    );
  }
}
