import { KangaroosFacade } from '@mdv-fourteen/core-state';
import { Kangaroo } from '@mdv-fourteen/core-data';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormGroupDirective, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'mdv-fourteen-kangaroo',
  templateUrl: './kangaroo.component.html',
  styleUrls: ['./kangaroo.component.scss']
})
export class KangarooComponent implements OnInit {
  form: FormGroup;
  selectedKangaroo$: Observable<Kangaroo> = this.kangaroosFacade.selectedKangaroo$;
  kangaroo$: Observable<Kangaroo[]> = this.kangaroosFacade.allKangaroos$;

  constructor(
    private fb: FormBuilder,
    private kangaroosFacade: KangaroosFacade
    ) { }

  ngOnInit() {
    this.initForm();
    this.kangaroosFacade.loadKangaroos();
    this.selectKangaroo({ id: null } as Kangaroo);
  }

  selectKangaroo(kangaroo: Kangaroo) {
    this.form.patchValue(kangaroo);
    this.kangaroosFacade.selectKangaroo(kangaroo.id);
  }

  cancel() {
    this.selectKangaroo({ id: null } as Kangaroo);
    this.form.reset();
  }

  saveKangaroo(formDirective: FormGroupDirective) {
    if(this.form.invalid) return;
    if(this.form.value.id) {
      this.kangaroosFacade.updateKangaroo(this.form.value);
      this.selectKangaroo({ id: null} as Kangaroo);
    } else {
      this.kangaroosFacade.createKangaroo(this.form.value);
      this.selectKangaroo({ id: null} as Kangaroo);
    }
  }

  deleteKangaroo(kangaroo: Kangaroo) {
    this.kangaroosFacade.deleteKangaroo(kangaroo);
  }

  initForm() {
    this.form = this.fb.group({
      id: [''],
      breed: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      jumpHeight: ['']
    })
  }

}

