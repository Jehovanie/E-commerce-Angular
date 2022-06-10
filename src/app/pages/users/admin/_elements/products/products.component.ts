import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/interface/Idata';
import { DataService } from 'src/app/services/data__service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  private _scooters !: IData[];
  private _informatiques !: IData[];
  private _cars !: IData[];
  private _dataFilter: string = "none";


  ///injection de service
  constructor(private db: DataService) { }

  ngOnInit(): void {

    ///subscribe to the service.
    this.db.getAllData().subscribe({
      next: data => {
        this._cars = data.car;
        this._informatiques = data.informatique;
        this._scooters = data.scouter;
      },
      complete: () => console.log("Fini...")
    })
  }

  /* =============== JUST FUNCTION GET ============== */
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
  /* =============== FIN FUNCTION GET ============== */

}
