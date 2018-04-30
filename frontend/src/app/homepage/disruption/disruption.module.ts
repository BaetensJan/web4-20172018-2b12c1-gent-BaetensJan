import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DisruptionComponent} from "./disruption.component";
import {DisruptionDataService} from "../../disruption/disruption-data.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DisruptionComponent],
  providers: [DisruptionDataService],
  exports: [
    DisruptionComponent
  ]
})
export class DisruptionModule { }
