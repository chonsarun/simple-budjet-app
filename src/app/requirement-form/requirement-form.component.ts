import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { thMobile } from '../th-mobile.validator';

@Component({
  selector: 'app-requirement-form',
  templateUrl: './requirement-form.component.html',
  styleUrls: ['./requirement-form.component.css'],
})
export class RequirementFormComponent implements OnInit {
  title = new FormControl('', Validators.required);
  contactMobileNo = new FormControl('', [Validators.required, thMobile]);
  disable: boolean = false;
  editId: number | null = null;

  fg = new FormGroup({
    title: this.title,
    contactMobileNo: this.contactMobileNo,
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requirementService: RequirementService
  ) {
    this.disable = requirementService.getDisable()

   }

  


  ngOnInit(): void {
    this.editId = Number(this.route.snapshot.paramMap.get('id'));
        //close form
    // if(this.requirementService.getDisableInputs() === true){
    //   this.fg.valid = false
    // }else {
    //   this.disableInputs = false
    // }
    // if found id then is edit action
    if (this.editId) {
      this.requirementService
        .getRequirement(this.editId)
        .subscribe((v) => this.fg.patchValue(v));
    }

  }

  onSubmit(): void {
    if (this.editId) {
      const editRequirement = this.fg.value as Requirement;
      this.requirementService
        .editRequirement(this.editId, editRequirement)
        .subscribe(() => this.router.navigate(['/requirement-list']));
    } else {
      // prepare data for API
      const newRequirement = this.fg.value as Requirement;
      this.requirementService
        .addRequirement(newRequirement)
        .subscribe(() => this.router.navigate(['/requirement-list']));
    }
  }
  onBack(): void {
    this.requirementService.setDisable(false)
    this.router.navigate(['/requirement-list']);
  }
}
