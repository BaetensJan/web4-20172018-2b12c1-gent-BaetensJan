import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StationDataService} from "../station/station-data.service";
import {SearchDataService} from "./search/search-data.service";
import {SearchComponent} from "./search/search.component";
import {HomepageComponent} from "./homepage.component";
import {FormsModule} from "@angular/forms";
import {DisruptionComponent} from "./disruption/disruption.component";
import {SearchModule} from "./search/search.module";
import {DisruptionDataService} from "./disruption/disruption-data.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SearchModule
  ],
  declarations: [DisruptionComponent, HomepageComponent],
  providers: [StationDataService, SearchDataService, DisruptionDataService],
  exports: [
    HomepageComponent
  ],
  entryComponents:[
    DisruptionComponent,
    HomepageComponent
  ]
})
export class HomepageModule { }
