import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoMainComponent } from './ngo-main.component';

describe('NgoMainComponent', () => {
  let component: NgoMainComponent;
  let fixture: ComponentFixture<NgoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
