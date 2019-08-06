import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswComponentsComponent } from './ngsw-components.component';

describe('NgswComponentsComponent', () => {
  let component: NgswComponentsComponent;
  let fixture: ComponentFixture<NgswComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgswComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgswComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
