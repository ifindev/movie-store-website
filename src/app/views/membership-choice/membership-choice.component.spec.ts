import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipChoiceComponent } from './membership-choice.component';

describe('MembershipChoiceComponent', () => {
  let component: MembershipChoiceComponent;
  let fixture: ComponentFixture<MembershipChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
