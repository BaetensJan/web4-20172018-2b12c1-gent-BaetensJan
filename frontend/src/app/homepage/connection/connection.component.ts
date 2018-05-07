import { Component, OnInit } from '@angular/core';
import {Route} from "../../route/route.model";
import {SearchDataService} from "../search/search-data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  private errorMsg : string;

  private _routes : Route[];

  constructor(private _searchDataService : SearchDataService) { }

  ngOnInit() {
    this._searchDataService.events$.forEach(() => this.loadConnections());
  }

  loadConnections() {
    this._searchDataService.search.subscribe(
      (routes) => {
        this._routes = routes;
      },
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while trying to retrieve routes: ${error.error}`;
      }
    )
  }

  get routes() {
    return this._routes;
  }

}
