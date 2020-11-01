import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';

describe('UtilsService', () => {
  let service: UtilsService;
  let snakeCaseObj: any;
  let camelCaseObj: any;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilsService);

    snakeCaseObj = {
      first_name: 'John',
      my_address: {
        my_country: 'USA',
      },
      subjects: [
        {
          sub_name: 'English',
          code: 'en',
        },
      ],
    };

    camelCaseObj = {
      firstName: 'John',
      myAddress: {
        myCountry: 'USA',
      },
      subjects: [
        {
          subName: 'English',
          code: 'en',
        },
      ],
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert to camel case', () => {
    expect(service.getCamelCaseObject(snakeCaseObj)).toEqual(camelCaseObj);
  });

  it('should convert to snake case', () => {
    expect(service.getSnakeCaseObject(camelCaseObj)).toEqual(snakeCaseObj);
  });
});
