import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scooters !: any;
  informatiques !: any;
  cars !: any;

  constructor(private db: DataService) { }

  ngOnInit(): void {

    this.scooters = this.db.getDataScouter();
    this.informatiques = this.db.getDataInfo();
    this.cars = this.db.getDataCar();
  }

}
