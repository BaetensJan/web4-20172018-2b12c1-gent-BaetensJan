import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {DatePickerDirective} from "../date-picker.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [DatePickerDirective],
  exports: [
    DatePickerDirective
  ]
})
export class SharedModule {
}
