export class ProgramFilterValue {
  label: string;
  value: any;
  active?: boolean;

  constructor(label: string, value: any) {
    this.label = label;
    this.value = value;
    this.active = false;
  }
}

export class ProgramFilter {
  title: string;
  key: string;
  filters: ProgramFilterValue[];

  constructor(title: string, key: string, filters: ProgramFilterValue[]) {
    this.title = title;
    this.key = key;
    this.filters = filters
      ? filters.map(
          (filter) => new ProgramFilterValue(filter.label, filter.value)
        )
      : [];
  }
}
