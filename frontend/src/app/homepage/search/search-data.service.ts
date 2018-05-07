import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Station} from "../../station/Station.model";
import {map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Search} from "./search";
import {Subject} from "rxjs/Subject";
import {Route} from "../../route/route.model";

@Injectable()
export class SearchDataService {
  private readonly _appUrl = '/API/';
  private _subject = new Subject<any>();
  private _search: Observable<Route[]>;

  constructor(private http: HttpClient) {}

  getRoutes(search : Search): Observable<Route[]> {
    this._search = this.http
      .get(`${this._appUrl}/routes/${JSON.stringify(search)}`)
      .pipe(map((list: any[]): Route[] => list.map(Route.fromJSON)));
    this.newEvent("new value")
    return this._search;
  }

  get search(){
    return this._search;
  }

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }

}
