import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ProgramState } from '../models/program-state';
import { LaunchProgram } from '../models/launch-program';

@Injectable({
  providedIn: 'root',
})
export class ProgramStateService {
  private stateSub = new BehaviorSubject<ProgramState>(
    new ProgramState(null, [])
  );

  get state$(): Observable<ProgramState> {
    return this.stateSub.asObservable();
  }

  public setState(error: Error, launches: LaunchProgram[]): void {
    this.stateSub.next(new ProgramState(error, launches));
  }
}
