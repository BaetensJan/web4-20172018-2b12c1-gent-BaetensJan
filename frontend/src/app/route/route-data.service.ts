import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Route} from "./route.model";

@Injectable()
export class RouteDataService {
  private readonly _appUrl = '/API';
  private _subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  get routes(): Observable<Route[]> {
    return this.http
      .get(`${this._appUrl}/routes/`)
      .pipe(map((list: any[]): Route[] => list.map(Route.fromJSON)));
  }
}
