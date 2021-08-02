import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiscoRecommendationEngineComponent } from './cisco-recommendation-engine.component';

describe('CiscoRecommendationEngineComponent', () => {
  let component: CiscoRecommendationEngineComponent;
  let fixture: ComponentFixture<CiscoRecommendationEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiscoRecommendationEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiscoRecommendationEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
