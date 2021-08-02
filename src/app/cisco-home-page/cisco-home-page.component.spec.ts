import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoHomePageComponent } from './cisco-home-page.component';

describe('CiscoHomePageComponent', () => {
  let component: CiscoHomePageComponent;
  let fixture: ComponentFixture<CiscoHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiscoHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
