import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  validateForm: FormGroup;

   data = {
    req_number: '12345',
    req_name: "ABC",
    req_email: "abc@gmail.com",
    from_loc: "New Delhi",
    to_loc: 'Singapur',
    assets: [
      {asset_name: "Asset1", req_date: "2019/01/01", del_date: "2019/02/01"},
      {asset_name: "Asset2", req_date: "2019/02/01", del_date: "2019/03/01"},
      {asset_name: "Asset3", req_date: "2019/03/01", del_date: "2019/04/01"},
      {asset_name: "Asset4", req_date: "2019/04/01", del_date: "2019/05/01"},
      {asset_name: "Asset5", req_date: "2019/05/01", del_date: "2019/06/01"},
      {asset_name: "Asset6", req_date: "2019/06/01", del_date: "2019/07/01"}
  ]
  };

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout.value === 'horizontal';
  }

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      formLayout: ['horizontal'],
      req_number: [this.data.req_number, [Validators.required]],
      req_name: [this.data.req_name, [Validators.required]],
      from_loc: [this.data.from_loc, [Validators.required]],
      to_loc: [this.data.to_loc, [Validators.required]],
      req_email: [this.data.req_email, [Validators.required]],
    });
  }
}
