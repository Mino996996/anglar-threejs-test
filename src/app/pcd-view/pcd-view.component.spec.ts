import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdViewComponent } from './pcd-view.component';

describe('PcdViewComponent', () => {
  let component: PcdViewComponent;
  let fixture: ComponentFixture<PcdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
