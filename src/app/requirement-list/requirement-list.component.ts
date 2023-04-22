import { Component, OnInit } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';
import { FormControl } from '@angular/forms';
import { mobileFormat } from '../mobile-format';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirement-list',
  templateUrl: './requirement-list.component.html',
  styleUrls: ['./requirement-list.component.css']
})
export class RequirementListComponent implements OnInit {

  requirements: Requirement[] = []

  isSmallTable = new FormControl(false);

  constructor(
    private router: Router,
    private requirementService: RequirementService) {
  }

  ngOnInit(): void {
    // this.requirements
    //   = requirementService.getRequirements();
    this.requirementService.getRequirements().subscribe(rs => this.requirements = rs)
  }

  // contactMobileNoFormat(mobileNo: string): string {
  //   console.log('contactMobileNoFormat')
  //   return mobileFormat(mobileNo);
  // }

  onAdd(): void {
    this.router.navigate(['/requirement-form'])
  }

  onDelete(id: number): void {
    this.requirementService.deleteRequirement(id).subscribe(
      () => this.requirements = this.requirements.filter(v => v.id != id));
  }

  onEdit(id: number): void {
    // http://localhost:4200/requirement-form/1010
    this.router.navigate(['/requirement-form', id])
  }

}
