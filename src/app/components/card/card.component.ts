import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() element !: any;

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
