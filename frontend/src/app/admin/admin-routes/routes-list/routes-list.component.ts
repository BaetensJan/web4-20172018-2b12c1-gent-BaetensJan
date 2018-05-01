import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Disruption} from "../../../disruption/disruption";
import {RouteDataService} from "../../../route/route-data.service";
import {Route} from "../../../route/route.model";

@Component({
  selector: 'app-routes-list',
  templateUrl: './routes-list.component.html',
  styleUrls: ['./routes-list.component.css']
})
export class RoutesListComponent implements OnInit {
  private errorMsg : string;

  private _routes : Route[];

  constructor(private _routeDataService : RouteDataService) { }

  ngOnInit() {
    //this._routeDataService.events$.forEach(event => this.reloadDisruptions());
    this.reloadDisruptions();
  }

  reloadDisruptions() {
    this._routeDataService.routes.subscribe(
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
