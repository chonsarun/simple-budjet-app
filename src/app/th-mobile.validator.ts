import { AbstractControl } from "@angular/forms";

// valid => null
// invalid => { thMobile: true }
export function thMobile(control: AbstractControl<string>): null | { thMobile: boolean } {

  // ต้องขึ้นต้นด้วย 08 หรือ 09 เท่านั้น
  const prefix = control.value.slice(0, 2);
  console.log('prefix', prefix);

  if (prefix === '08' || prefix === '09') {
    return null;
  }

  return { thMobile: true };
}