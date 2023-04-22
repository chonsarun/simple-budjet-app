import { Component } from '@angular/core';
import { Requirement } from '../requirement';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-approval',
  templateUrl: './requirement-approval.component.html',
  styleUrls: ['./requirement-approval.component.css']
})
export class RequirementApprovalComponent {
  requirements: Requirement[] = []

  constructor(
    private requirementService: RequirementService) {
  }

  ngOnInit(): void {
    this.requirementService.getRequirements().subscribe(rs => this.requirements = rs)
  }

  // approval
  onApprove(id: number): void {
    this.requirementService
      .approveRequirement(id)
      .subscribe(
        () =>
          (this.requirements = this.requirements.map((v) =>
           // ถ้า requirement ตัวไหนคือตัวที่ approve v.id === id
           // ให้เอา field เดิมทุก field แลัวเขียน status ทับด้วย A
           // แต่ถ้าไม่ใช่ ให้เอา field เดิมทุก field เหมือนเดิม
            v.id === id ? { ...v, status: 'A' } : { ...v }
          ))
      );
  }

  onReject(id: number): void {
    this.requirementService
      .approveRequirement(id)
      .subscribe(
        () =>
          (this.requirements = this.requirements.map((v) =>
           // ถ้า requirement ตัวไหนคือตัวที่ approve v.id === id
           // ให้เอา field เดิมทุก field แลัวเขียน status ทับด้วย A
           // แต่ถ้าไม่ใช่ ให้เอา field เดิมทุก field เหมือนเดิม
            v.id === id ? { ...v, status: 'R' } : { ...v }
          ))
      );
  }

}
