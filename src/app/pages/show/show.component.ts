import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

    private _urlParamType!: string;
    private _urlParamId!: string;

    public element: any;
    public elementNext!: string;
    public elementPrev!: string;

    constructor(private route: ActivatedRoute, private rooter: Router, private dataService: DataService) { }

    ngOnInit(): void {
        this.route.params.forEach(param => {
            this._urlParamType = param.type;
            this._urlParamId = param.id;
        })

        this.element = this.dataService.getByTypeAndId(this._urlParamType, Number(this._urlParamId));
        console.log(this.element);

        const prev = Number(this._urlParamId) - 1
        const next = Number(this._urlParamId) + 1

        this.elementPrev = prev.toString()
        this.elementNext = next.toString()
    }

}
