import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarcompnentComponent } from './topbarcompnent.component';

describe('TopbarcompnentComponent', () => {
  let component: TopbarcompnentComponent;
  let fixture: ComponentFixture<TopbarcompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbarcompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarcompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
