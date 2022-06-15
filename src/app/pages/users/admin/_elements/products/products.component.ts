import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

    public selectedCategory: string = "cars"
    public formGroup!: any;
    public elements!: IData[]

    ///injection de service
    constructor(private db: DataService, private formBuilder: FormBuilder) {
        this.formGroup = this.formBuilder.group({
            "selectOption": ["default"]
        })
    }

    ngOnInit(): void {

        ///subscribe to the service.
        this.db.getAllData().subscribe({
            next: data => {
                this._cars = data.car;
                this._informatiques = data.informatique;
                this._scooters = data.scouter;
                this.elements = data.car;
            },
            complete: () => console.log("Fini...")
        })
    }

    /* =============== FILTRE PAR CATEGORIES ============== */

    onChange(obj: any): void {

        switch (obj.value.selectOption) {
            case 'car':
                this.db.getAllData().subscribe({
                    next: data => this.elements = data.car,
                    complete: () => console.log("filter finised ...")
                })
                break;
            case 'info':
                this.db.getAllData().subscribe({
                    next: data => this.elements = data.informatique,
                    complete: () => console.log("filter finised ...")
                })
                break;
            case 'scouter':
                this.db.getAllData().subscribe({
                    next: data => this.elements = data.scouter,
                    complete: () => console.log("filter finised ...")
                })
                break;
            default:
                break;
        }
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
