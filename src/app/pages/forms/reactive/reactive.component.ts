import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormArray, // managing unnamed controls
} from '@angular/forms';

function forbiddenNameValidator(nameRgx: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRgx.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  // form1 --- single form control
  name = new FormControl('');

  // form2 --- grouping form control
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //   }),
  // });

  // form2 --- with form builder & validation
  profileForm = this.formbuilder.group({
    firstName: ['', Validators.required], // [defaultValue, validators(single or array), async promise]
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/voldermort/i), // custom validator
      ],
    ],
    address: this.formbuilder.group({
      street: [''],
      city: [''],
    }),
    aliases: this.formbuilder.array([
      // dynamic form
      this.formbuilder.control(''),
    ]),
  });
  // getter to provide access
  // this.profileForm.get('name') returns AbstractControl, so you need to provide an explicit type
  get lastNameControl() {
    return this.profileForm.get('lastName') as FormControl;
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  // include formbuilder service here
  constructor(private formbuilder: FormBuilder) {}

  ngOnInit(): void {}

  // form1
  updateName() {
    this.name.setValue('Nancy');
  }

  // form2
  onSubmit() {
    // TODO: Use EventEmitter with form value
    // Use EventEmitter to keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: 'Baker Street',
      },
    });
  }
  addAlias() {
    this.aliases.push(this.formbuilder.control(''));
  }
  getErrorMsg(formControl: FormControl): string {
    let msg = '';
    const { pristine, errors } = formControl;
    if (!errors || pristine) {
      return msg;
    }
    if (errors.minlength) {
      msg = `Plesase insert a minimum of ${errors.minlength.requiredLength} characters.`;
    } else if (errors.required) {
      msg = 'This is a required field.';
    } else if (errors.forbiddenName) {
      msg = 'He-who-shall-not-be-named is forbidden to use this platform.';
    }
    return msg;
  }
}
