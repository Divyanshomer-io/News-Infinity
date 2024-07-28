import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertainmentNewsComponent } from './entertainment-news.component';

describe('EntertainmentNewsComponent', () => {
  let component: EntertainmentNewsComponent;
  let fixture: ComponentFixture<EntertainmentNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntertainmentNewsComponent]
    });
    fixture = TestBed.createComponent(EntertainmentNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
