import { FormControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperValidatorService {

  requireMatch(control: FormControl): ValidationErrors | null {
    const selection: any = control.value;
    if (typeof selection === 'string') {
      return { requireMatch: true };
    }
    return null;
  }
}
