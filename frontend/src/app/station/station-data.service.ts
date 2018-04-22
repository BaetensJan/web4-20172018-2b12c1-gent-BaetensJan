import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Station} from "./Station.model";
import {map} from "rxjs/operators";

@Injectable()
export class StationDataService {
  private readonly _appUrl = '/API/';

  constructor(private http: HttpClient) {}

  get stations(): Observable<Station[]> {
    return this.http
      .get(`${this._appUrl}/stations/`)
      .pipe(map((list: any[]): Station[] => list.map(Station.fromJSON)));
  }

  addNewStation(recipe: Station): Observable<Station> {
    return this.http
      .post(`${this._appUrl}/stations/`, recipe)
      .pipe(map(Station.fromJSON));
  }
/*
  getRecipe(naam: string): Observable<Station> {
    return this.http
      .get(`${this._appUrl}/station/${naam}`)
      .pipe(map(Station.fromJSON));
  }
  */
}
