import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasboardcompComponent } from './dasboardcomp.component';

describe('DasboardcompComponent', () => {
  let component: DasboardcompComponent;
  let fixture: ComponentFixture<DasboardcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasboardcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasboardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
