import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecogParamsComponent } from './recog-params.component';

describe('RecogParamsComponent', () => {
  let component: RecogParamsComponent;
  let fixture: ComponentFixture<RecogParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecogParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecogParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
