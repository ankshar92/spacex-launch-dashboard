export class ProgramListFilters {
  launchYear?: string;
  launchSuccess?: boolean;
  landSuccess?: boolean;

  constructor(data: any) {
    if (data.launchYear !== undefined) {
      this.launchYear = data.launchYear;
    }

    if (data.launchSuccess !== undefined) {
      this.launchSuccess = data.launchSuccess === 'true' ? true : false;
    }

    if (data.landSuccess !== undefined) {
      this.landSuccess = data.landSuccess === 'true' ? true : false;
    }
  }
}
