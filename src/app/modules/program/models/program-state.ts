import { LaunchProgram } from './launch-program';

export class ProgramState {
  error: Error;
  launches: LaunchProgram[];

  constructor(error: Error, launches: LaunchProgram[]) {
    this.error = error || null;
    this.launches = launches || [];
  }
}
