import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Disruption} from "./disruption";

@Injectable()
export class DisruptionDataService {
  private readonly _appUrl = '/API/';

  constructor(private http: HttpClient) {}

  get disruptions(): Observable<Disruption[]> {
    return this.http
      .get(`${this._appUrl}/onderbrekingen/`)
      .pipe(map((list: any[]): Disruption[] => list.map(Disruption.fromJSON)));
  }
/*
  addNewDisruption(recipe: Station): Observable<Station> {
    return this.http
      .post(`${this._appUrl}/onderbrekingen/`, recipe)
      .pipe(map(Station.fromJSON));
  }
*/
}
