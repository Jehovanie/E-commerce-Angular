import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public inputData: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  set setInputData(value: string) {
    this.inputData = value;
  }

}
