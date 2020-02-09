import { KangaroosFacade } from './../../../../../../libs/core-state/src/lib/kangaroo/kangaroos.facade';
import { Kangaroo } from './../../../../../../libs/core-data/src/lib/kangaroo/kangaroo';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdv-fourteen-kangaroo-item',
  templateUrl: './kangaroo-item.component.html',
  styleUrls: ['./kangaroo-item.component.scss']
})
export class KangarooItemComponent implements OnInit {
  kangaroo$: Observable<Kangaroo>;

  constructor(
    private route: ActivatedRoute,
    private kangaroosFacade: KangaroosFacade
  ) { }

  ngOnInit() {
    this.kangaroosFacade.loadKangaroos();
    this.route.params.subscribe((param) => this.kangaroosFacade.selectKangaroo(param['id']));
    this.kangaroo$ = this.kangaroosFacade.selectedKangaroo$
  }

}
