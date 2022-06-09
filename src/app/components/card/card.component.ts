import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IData } from 'src/app/interface/Idata';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() element!: IData;

  tab_etoil!: Number[];

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  handleClick(id: number) {
    this.route.navigate(['/show', { type: this.element.type, id: id }]);
  }

  handleClickedFromAppStart(message: string) {
    alert(message);
  }

}
