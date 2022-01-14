import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutzoneComponent } from './outzone.component';

describe('OutzoneComponent', () => {
  let component: OutzoneComponent;
  let fixture: ComponentFixture<OutzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
