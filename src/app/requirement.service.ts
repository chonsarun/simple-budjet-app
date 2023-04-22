import { Injectable } from '@angular/core';
import { Requirement } from './requirement';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RequirementService {

  readonly url = 'http://localhost:3000/requirements';

  constructor(private httpClient: HttpClient) {
  }

  getRequirements(): Observable<Requirement[]> {

    return this.httpClient.get<Requirement[]>(this.url);
  }

  getRequirement(id: number): Observable<Requirement> {
    return this.httpClient.get<Requirement>(`${this.url}/${id}`);
  }

  addRequirement(newRequirement: Requirement): Observable<Requirement> {
    return this.httpClient.post<Requirement>(this.url, newRequirement);
  }

  deleteRequirement(id: number): Observable<void> {

    return this.httpClient.delete<void>(`${this.url}/${id}`)

  }

  editRequirement(id: number, editRequirement: Requirement): Observable<void> {
    return this.httpClient.put<void>(`${this.url}/${id}`, editRequirement);
  }

  approveRequirement(id: number): Observable<void> {
    return this.httpClient
      .patch<void>(`${this.url}/${id}`, { status: 'A' });
  }

  rejectRequirement(id: number): Observable<void> {
    return this.httpClient
      .patch<void>(`${this.url}/${id}`, { status: 'R' });
  }
}
