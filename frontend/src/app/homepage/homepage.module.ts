import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StationDataService} from "../station/station-data.service";
import {SearchDataService} from "./search/search-data.service";
import {HomepageComponent} from "./homepage.component";
import {FormsModule} from "@angular/forms";
import {DisruptionComponent} from "./disruption/disruption.component";
import {SearchModule} from "./search/search.module";
import {DisruptionDataService} from "../disruption/disruption-data.service";
import {ConnectionComponent} from "./connection/connection.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchModule
  ],
  declarations: [DisruptionComponent, HomepageComponent, ConnectionComponent],
  providers: [StationDataService, SearchDataService, DisruptionDataService],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
