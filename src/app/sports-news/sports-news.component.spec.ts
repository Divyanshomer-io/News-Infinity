import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsNewsComponent } from './sports-news.component';

describe('SportsNewsComponent', () => {
  let component: SportsNewsComponent;
  let fixture: ComponentFixture<SportsNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsNewsComponent]
    });
    fixture = TestBed.createComponent(SportsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
