import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBotonComponent } from './login-boton.component';

describe('LoginBotonComponent', () => {
  let component: LoginBotonComponent;
  let fixture: ComponentFixture<LoginBotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
