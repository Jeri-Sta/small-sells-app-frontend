import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isLoading: boolean = false;
  public formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formGroup = this.getFormGroup();
  }

  private getFormGroup(): FormGroup {
    const formGroup = this.formBuilder.group({
      username: [{ value: undefined, disabled: false}, Validators.compose([])],
      password: [{ value: undefined, disabled: false}, Validators.compose([])]
    });
    return formGroup;
  }

  public onSubmit() {
    this.isLoading = true
  }
}
