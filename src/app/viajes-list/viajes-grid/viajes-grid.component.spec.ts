import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajesGridComponent } from './viajes-grid.component';

describe('ViajesGridComponent', () => {
  let component: ViajesGridComponent;
  let fixture: ComponentFixture<ViajesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
