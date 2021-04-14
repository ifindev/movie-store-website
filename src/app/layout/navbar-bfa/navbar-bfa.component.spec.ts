import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBfaComponent } from './navbar-bfa.component';

describe('NavbarBfaComponent', () => {
  let component: NavbarBfaComponent;
  let fixture: ComponentFixture<NavbarBfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarBfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
