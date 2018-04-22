import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Station} from "../../station/Station.model";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Search} from "./search";

@Injectable()
export class SearchDataService {
  private readonly _appUrl = '/API/';

  constructor(private http: HttpClient) {}

  getRoutes(search : Search): Observable<Station[]> {
    return this.http
      .get(`${this._appUrl}/routes/${JSON.stringify(search)}`)
      .pipe(map((list: any[]): Station[] => list.map(Station.fromJSON)));
  }
}
