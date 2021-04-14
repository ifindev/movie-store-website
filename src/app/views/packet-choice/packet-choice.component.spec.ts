import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketChoiceComponent } from './packet-choice.component';

describe('PacketChoiceComponent', () => {
  let component: PacketChoiceComponent;
  let fixture: ComponentFixture<PacketChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
