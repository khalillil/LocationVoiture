import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosVoituresComponent } from './nos-voitures.component';

describe('NosVoituresComponent', () => {
  let component: NosVoituresComponent;
  let fixture: ComponentFixture<NosVoituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosVoituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosVoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
