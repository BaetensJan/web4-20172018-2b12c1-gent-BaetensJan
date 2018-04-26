import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search.component";
import {FormsModule} from '@angular/forms';
import {SearchDataService} from "./search-data.service";
import {StationDataService} from "../../station/station-data.service";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [SearchComponent],
  providers: [StationDataService, SearchDataService],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
