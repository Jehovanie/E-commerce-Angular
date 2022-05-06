import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OtherRoutingModule } from "./other-routing.module";
import { OtherComponent } from "./other.component";

@NgModule({
    declarations: [
        OtherComponent,
    ],
    imports: [
        CommonModule,
        OtherRoutingModule
    ],
    exports: [],
})

export class OtherModule { }