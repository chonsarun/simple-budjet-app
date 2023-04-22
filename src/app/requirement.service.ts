import { Injectable } from '@angular/core';
import { Requirement } from './requirement-list/requirement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequirementService {


  constructor(private httpClient: HttpClient) {
  }

  getRequirements(): Observable <Requirement[]> {
    const url = 'http://localhost:3000/requirements';
    return this.httpClient.get<Requirement[]>(url);
  }
}
