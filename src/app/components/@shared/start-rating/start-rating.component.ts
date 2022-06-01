import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-start-rating",
    templateUrl: './start-rating.component.html',
    styleUrls: ['./start-rating.component.scss']
})

export class StartRatingComponent implements OnChanges {

    public ratingWidth: number = 100;
    public isClicked: boolean = false;

    @Input()
    public rate!: number;

    @Output()
    public handleClickFromStartRating: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.ratingWidth = this.rate * 125 / 5
    }

    handelClickOnStart() {
        this.handleClickFromStartRating.emit("the Botton Start is clicked ....");
    }

}