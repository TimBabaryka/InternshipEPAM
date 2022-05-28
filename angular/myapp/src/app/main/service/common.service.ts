import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}
  addId(id: number) {
    return function iter(o: any) {
      if ('title' in o) {
        o.id = id++;
      }
      Object.keys(o).forEach(function (k) {
        Array.isArray(o[k]) && o[k].forEach(iter);
      });
    };
  }
}
