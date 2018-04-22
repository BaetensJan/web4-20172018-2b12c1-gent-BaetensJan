import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search.component";
import {FormsModule} from '@angular/forms';
import {SearchDataService} from "./search-data.service";
import {StationDataService} from "../../station/station-data.service";


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SearchComponent],
  providers: [StationDataService, SearchDataService],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
