import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KangarooDetailsComponent } from './kangaroo-details.component';

describe('KangarooDetailsComponent', () => {
  let component: KangarooDetailsComponent;
  let fixture: ComponentFixture<KangarooDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KangarooDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KangarooDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
