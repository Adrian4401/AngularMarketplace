import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepStatusService {
  private stepStatusSource = new BehaviorSubject<boolean>(false);
  stepStatus$ = this.stepStatusSource.asObservable();

  updateStepStatus(status: boolean): void {
    this.stepStatusSource.next(status);
  }
}
