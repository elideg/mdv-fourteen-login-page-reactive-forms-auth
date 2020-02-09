import { Kangaroo } from './../../../../../../libs/core-data/src/lib/kangaroo/kangaroo';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mdv-fourteen-kangaroo-list',
  templateUrl: './kangaroo-list.component.html',
  styleUrls: ['./kangaroo-list.component.scss']
})
export class KangarooListComponent implements OnInit {
  @Input() kangaroos: Kangaroo[];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  select(kangaroo: Kangaroo) {
    this.selected.emit(kangaroo);
  }

  delete(kangaroo: Kangaroo) {
    this.deleted.emit(kangaroo);
  }
}
