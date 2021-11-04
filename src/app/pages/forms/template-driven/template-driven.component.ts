import { Component, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

type fields = 'account' | 'password';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  account = '';
  password = '';
  accountErrorMsg = '';
  passwordErrorMsg = '';

  constructor() {}

  ngOnInit(): void {}

  accountValChange(account: string, errors: ValidationErrors | null): void {
    console.log('account', account, errors);
    this.account = account;
    this.validationCheck(errors, 'account');
  }

  passwordValChange(password: string, errors: ValidationErrors | null): void {
    this.password = password;
    this.validationCheck(errors, 'password');
  }

  private setErrorMessage(fieldName: fields, errorMessage: string): void {
    if (fieldName === 'account') {
      this.accountErrorMsg = errorMessage;
    } else {
      this.passwordErrorMsg = errorMessage;
    }
  }

  private validationCheck(
    errors: ValidationErrors | null,
    fieldName: fields
  ): void {
    let errMsg = '';
    if (!errors) {
      errMsg = '';
    } else if (errors.required) {
      errMsg = 'This is a required field';
    } else if (errors.pattern) {
      errMsg = 'Invalid format, please check again';
    } else if (errors.minlength) {
      errMsg = 'Password should have a minimum of 8 characters';
    }
    this.setErrorMessage(fieldName, errMsg);
  }

  submit() {
    console.log('SUBMIT');
  }
}
