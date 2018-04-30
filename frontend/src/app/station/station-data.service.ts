import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Station} from "./Station.model";
import {map, tap} from "rxjs/operators";
import {Subject} from "rxjs/Subject";
import {Disruption} from "../disruption/disruption";

@Injectable()
export class StationDataService {
  private readonly _appUrl = '/API';
  private _subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  get stations(): Observable<Station[]> {
    return this.http
      .get(`${this._appUrl}/stations/`)
      .pipe(map((list: any[]): Station[] => list.map(Station.fromJSON)));
  }

  addNewStation(recipe: Station): Observable<Station> {
    return this.http
      .post(`${this._appUrl}/stations/`, recipe)
      .pipe(tap(val =>this.newEvent("new value")), map(Station.fromJSON));
  }

  removeStation(station : Station) : Observable<Station> {
    return this.http
      .delete(`${this._appUrl}/stations/${station.naam}`)
      .pipe(tap(val =>this.newEvent("new value")),map(Station.fromJSON));
  }

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }

  checkStationNameAvailability(name: string): Observable<boolean> {
    return this.http.post(`${this._appUrl}/checkstationname/`, {name}).pipe(
      map((item: any) => {
        if (item.name === 'alreadyexists') {
          console.log(item);
          return true;
        } else {
          console.log(item);
          return false;
        }
      })
    );
  }
}
