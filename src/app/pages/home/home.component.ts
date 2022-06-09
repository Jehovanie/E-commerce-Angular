import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/interface/Idata';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  private _scooters !: IData[];
  private _informatiques !: IData[];
  private _cars !: IData[];
  private _dataFilter: string = "none";


  constructor(private db: DataService) { }

  ngOnInit(): void {

    this._scooters = this.db.getDataScouter();
    this._informatiques = this.db.getDataInfo();
    this._cars = this.db.getDataCar();
  }

  get getDataFilter(): string {
    return this._dataFilter;
  }

  set setDataFilter(newData: string) {
    this._dataFilter = newData;
  }

  get getCars(): IData[] {
    return this._cars;
  }

  get getInfo(): IData[] {
    return this._informatiques;
  }

  get getScouters(): IData[] {
    return this._scooters;
  }
}
