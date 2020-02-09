import { Kangaroo } from './../../../../../../libs/core-data/src/lib/kangaroo/kangaroo';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroupDirective, FormGroup } from '@angular/forms';

@Component({
  selector: 'mdv-fourteen-kangaroo-details',
  templateUrl: './kangaroo-details.component.html',
  styleUrls: ['./kangaroo-details.component.scss']
})
export class KangarooDetailsComponent implements OnInit {
  originalBreed;
  currentKangaroo: Kangaroo

  @Output() saved = new EventEmitter;
  @Output() cancelled = new EventEmitter;
  @Input() form: FormGroup;
  @Input() set kangaroo(value) {
    if (value) this.originalBreed = value.breed;
      this.currentKangaroo = Object.assign({}, value)
  }

  constructor() { }

  ngOnInit() {
  }

  save(kangaroo: Kangaroo) {
    this.saved.emit(kangaroo);
  }

  cancel() {
    this.cancelled.emit();
  }

  saveForm(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective)
    formDirective.resetForm()
  }
}
