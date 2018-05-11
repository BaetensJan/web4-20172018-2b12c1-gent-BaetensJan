import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from "./search.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SearchDataService} from "./search-data.service";
import {StationDataService} from "../../station/station-data.service";
import {DatePickerModule} from "../../date-picker/date-picker.module";
import {
  httpInterceptorProviders,
  basehttpInterceptorProviders
} from "../../http-interceptors/index";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DatePickerModule
  ],
  declarations: [SearchComponent],
  providers: [StationDataService, SearchDataService, httpInterceptorProviders],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
