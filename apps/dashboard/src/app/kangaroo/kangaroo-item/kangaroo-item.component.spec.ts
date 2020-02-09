import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KangarooItemComponent } from './kangaroo-item.component';

describe('KangarooItemComponent', () => {
  let component: KangarooItemComponent;
  let fixture: ComponentFixture<KangarooItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KangarooItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KangarooItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
