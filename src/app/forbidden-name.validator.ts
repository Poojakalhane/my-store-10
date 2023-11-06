import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function forbiddenNameValidator(forbiddenName: RegExp): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null => {
    //assigning the value of the name textbox to the variable val
    let val = control.value
    if(forbiddenName.test(val))
       return {forbidden: control.value}
    else
       return null
  }
}
