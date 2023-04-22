import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";
export function thMobile(control: AbstractControl<string> ): null |{ thMobile: boolean }{

    const prefix = control.value.slice(0,2)

    if(prefix === '08' || prefix === '09'){
        return null
    }

    return { thMobile: true }
    
}