import { Injectable } from '@angular/core';
import { camelCase, snakeCase } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  public getCamelCaseObject(object: any): any {
    const newObj = object ? (Array.isArray(object) ? [] : {}) : object;

    if (newObj) {
      Object.keys(object).forEach((key) => {
        if (typeof object[key] === 'object') {
          newObj[camelCase(key)] = this.getCamelCaseObject(object[key]);
        } else {
          newObj[camelCase(key)] = object[key];
        }
      });
    }

    return newObj;
  }

  public getSnakeCaseObject(object: any): any {
    const newObj = object ? (Array.isArray(object) ? [] : {}) : object;

    if (newObj) {
      Object.keys(object).forEach((key) => {
        if (typeof object[key] === 'object') {
          newObj[snakeCase(key)] = this.getSnakeCaseObject(object[key]);
        } else {
          newObj[snakeCase(key)] = object[key];
        }
      });
    }

    return newObj;
  }
}
