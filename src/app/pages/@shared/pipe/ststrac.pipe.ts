import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "subText"
})

export class SubStractText implements PipeTransform {
    transform(text: string): string {
        var headText = text.substr(0, 25);
        return `${headText} ... `
    }

}