import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/interface/Idata';
import { DataService } from 'src/app/services/data__service/data.service';

@Component({
    selector: 'app-a-la-une',
    templateUrl: './a-la-une.component.html',
    styleUrls: ['./a-la-une.component.scss']
})
export class ALaUneComponent implements OnInit {

    private _theme!: string;

    public data!: IData

    constructor(private ds: DataService) { }

    ngOnInit(): void {
        var theme: string = ""
        const randInt: number = this.getRandomInt(0, 1);

        if (randInt === 0) {
            this._theme = "car";
        } else {
            this._theme = "scouter"
        }

        this.ds.getAllData().subscribe({
            next: s => {
                switch (this._theme) {
                    case "car":
                        var l = s.car.length;
                        var el = this.getRandomInt(0, l - 1)
                        this.data = s.car[el];
                        break;
                    case "scouter":
                        var l = s.scouter.length;
                        var el = this.getRandomInt(0, l - 1)
                        this.data = s.scouter[el];
                        break;
                    default:
                        break;
                }

                console.log(this.data)
            },
            complete: () => console.log("fetch data finished ... ")
        })

    }

    public handleArrowClick() {
        alert("CLicke arrorw ... ")
    }

    private getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
