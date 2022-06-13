import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IData } from 'src/app/interface/Idata';
import { DataService } from 'src/app/services/data__service/data.service';


@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    private _urlParamType!: string;
    private _urlParamId!: number;

    public element!: IData;

    constructor(private route: ActivatedRoute, private rooter: Router, private dataService: DataService) { }

    ngOnInit(): void {

        ///prendre les valeurs de paramtètre dans l'url
        this.route.params.forEach(param => {
            this._urlParamType = param.type;
            this._urlParamId = +param.id;
        })

        switch (this._urlParamType) {
            case "car":
                this.dataService.getAllData().subscribe({
                    next: data => this.element = data.car.find((item: IData) => item.id == this._urlParamId),
                    complete: () => console.log("get car finised...")
                });

                break;
            case "informatique":
                this.dataService.getAllData().subscribe(
                    {
                        next: data => this.element = data.informatique.find((item: IData) => item.id == this._urlParamId),
                        complete: () => console.log("get info finised...")
                    })
                break;
            case "scouter":
                this.dataService.getAllData().subscribe({
                    next: data => this.element = data.scouter.find((item: IData) => item.id == this._urlParamId),
                    complete: () => console.log("get scouter finised...")
                })
                break;
            default:
                break;
        }

    }
}
