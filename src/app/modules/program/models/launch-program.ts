export class LaunchProgram {
  missionName: string;
  flightNumber: number;
  missionPatchSmall: string;
  missionId: string[];
  launchYear: string;
  launchSuccess: boolean;
  landSuccess: boolean;

  constructor(launch: any) {
    this.missionName = launch.missionName;
    this.flightNumber = launch.flightNumber;
    this.missionPatchSmall = launch.links.missionPatchSmall;
    this.missionId = launch.missionId || [];
    this.launchYear = launch.launchYear;
    this.launchSuccess = launch.launchSuccess;
    this.landSuccess = launch.rocket.firstStage.cores[0].landSuccess;
  }
}
