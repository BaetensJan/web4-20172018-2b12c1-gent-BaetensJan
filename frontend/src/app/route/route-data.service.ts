import { Injectable } from '@angular/core';
import {map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Route} from "./route.model";
import {Station} from "../station/Station.model";

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

  addNewRoute(route: Route): Observable<Route> {
    return this.http
      .post(`${this._appUrl}/routes/`, route)
      .pipe(tap(() =>this.newEvent("new value")), map(Route.fromJSON));
  }

  removeRoute(route: Route) : Observable<Route>{
    return this.http
      .delete(`${this._appUrl}/routes/${route.id}`)
      .pipe(tap(() =>this.newEvent("new value")),map(Route.fromJSON));
  }

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }

}
