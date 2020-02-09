import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KangarooComponent } from './kangaroo.component';

describe('KangarooComponent', () => {
  let component: KangarooComponent;
  let fixture: ComponentFixture<KangarooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KangarooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KangarooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
