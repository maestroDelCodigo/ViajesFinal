import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesFilterReactiveComponent } from './viajes-filter-reactive.component';

describe('ViajesFilterReactiveComponent', () => {
  let component: ViajesFilterReactiveComponent;
  let fixture: ComponentFixture<ViajesFilterReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesFilterReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesFilterReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
