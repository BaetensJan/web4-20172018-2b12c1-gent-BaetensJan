import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {map, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Disruption} from "./disruption";
import {Subject} from "rxjs/Subject";

@Injectable()
export class DisruptionDataService {
  private readonly _appUrl = '/API/';
  private _subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  get disruptions(): Observable<Disruption[]> {
    return this.http
      .get(`${this._appUrl}/onderbrekingen/`)
      .pipe(map((list: any[]): Disruption[] => list.map(Disruption.fromJSON)));
  }

  addNewDisruption(disruption: Disruption): Observable<Disruption> {
    return this.http
      .post(`${this._appUrl}/onderbrekingen/`, disruption)
      .pipe(tap(val =>this.newEvent("new value")),map(Disruption.fromJSON));
  }

  removeDisruption(disruption : Disruption): Observable<Disruption> {
    return this.http
      .delete(`${this._appUrl}/onderbrekingen/${disruption.datumtijd}`)
      .pipe(tap(val =>this.newEvent("new value")),map(Disruption.fromJSON));
  }

  newEvent(event) {
    this._subject.next(event);
  }

  get events$ () {
    return this._subject.asObservable();
  }

}
