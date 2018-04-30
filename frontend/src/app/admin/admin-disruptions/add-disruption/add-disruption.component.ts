import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Disruption} from "../../../disruption/disruption";
import {DisruptionDataService} from "../../../disruption/disruption-data.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-add-disruption',
  templateUrl: './add-disruption.component.html',
  styleUrls: ['./add-disruption.component.css']
})
export class AddDisruptionComponent implements OnInit {
  public errorMsg: string;

  private model : FormGroup;

  constructor(
    private fb: FormBuilder,
    private _disruptionDataService : DisruptionDataService
  ) {
    this.model = this.fb.group({
      titel: ['', [Validators.required]],
      bericht: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const disruption = new Disruption(this.model.value.titel, this.model.value.bericht, new Date());

    this._disruptionDataService.addNewDisruption(disruption).subscribe(
      () => {},
      (error: HttpErrorResponse) => {
        this.errorMsg = `Error ${error.status} while adding disruption for ${
          disruption.titel
          }: ${error.error}`;
      }
    );
  }
}
