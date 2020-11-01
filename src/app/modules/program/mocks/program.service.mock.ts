import { Injectable } from '@angular/core';

import { LaunchProgram } from '../models/launch-program';
import { ProgramListFilters } from '../models/program-list-query-params';
import { ProgramStateService } from '../services/program-state.service';

@Injectable()
export class ProgramServiceMock {
  constructor(private state: ProgramStateService) {}

  public getPrograms(_: ProgramListFilters): void {
    this.state.setState(null, [
      new LaunchProgram({
        missionName: 'MissionName',
        flightNumber: 1,
        links: { missionPatchSmall: '' },
        missionId: ['1001'],
        launchYear: 2020,
        launchSuccess: true,
        rocket: { firstStage: { cores: [{ landSuccess: false }] } },
      }),
    ]);
  }
}
