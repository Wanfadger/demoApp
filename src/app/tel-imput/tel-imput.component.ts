import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, ValidationErrors, AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-tel-imput',
  templateUrl: './tel-imput.component.html',
  styleUrls: ['./tel-imput.component.scss']
})
export class TelIMputComponent implements OnInit {

  fb: FormBuilder = inject(FormBuilder)

  phoneFormGroup = this.fb.group({
    phone: [null],
    email: [null, [Validators.email, Validators.pattern(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)]],
  })

  constructor() { }
  ngOnInit(): void {
   this.phoneFormGroup.setValidators(this.atLeastOneShouldNotBeEmpty())
  }

  atLeastOneShouldNotBeEmpty():ValidatorFn {
    return (abstractControl: AbstractControl):ValidationErrors | null => {
      const formGroup:FormGroup = abstractControl as FormGroup;
      // ATleast one controle should not be empty
      const controlNames = Object.keys(formGroup.controls)
      const atleastOneIsValid = controlNames.some(controlName => {
        const control = formGroup.get(controlName) as FormControl
        return control.value != null && control.value.length != 0 
      })

      return atleastOneIsValid? null : { atLeastOneShouldNotBeEmpty: "all optional fields are empty" }
    }
  }



  control(key: string) {
    return this.phoneFormGroup.get(key) as FormControl
  }

  onSubmit() {
    console.log('onSubmit', this.phoneFormGroup)
  }

  onReset() {
    this.phoneFormGroup.reset()
  }


}

