import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswTableComponent } from './ngsw-table.component';

describe('NgswTableComponent', () => {
  let component: NgswTableComponent;
  let fixture: ComponentFixture<NgswTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
