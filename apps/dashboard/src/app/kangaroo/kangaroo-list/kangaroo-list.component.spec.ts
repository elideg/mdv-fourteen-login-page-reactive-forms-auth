import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KangarooListComponent } from './kangaroo-list.component';

describe('KangarooListComponent', () => {
  let component: KangarooListComponent;
  let fixture: ComponentFixture<KangarooListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KangarooListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KangarooListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
