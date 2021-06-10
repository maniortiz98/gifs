import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidelbarComponent } from './sidelbar.component';

describe('SidelbarComponent', () => {
  let component: SidelbarComponent;
  let fixture: ComponentFixture<SidelbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidelbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidelbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
