import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydashcompComponent } from './mydashcomp.component';

describe('MydashcompComponent', () => {
  let component: MydashcompComponent;
  let fixture: ComponentFixture<MydashcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydashcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydashcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
