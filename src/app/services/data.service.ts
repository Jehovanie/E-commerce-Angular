import { Injectable } from '@angular/core';
import data from "../../data";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getAllData() {
    return data;
  }

  getDataCar() {
    return data.car;
  }
  getDataInfo() {
    return data.informatique;
  }
  getDataScouter() {
    return data.scouter;
  }
}
