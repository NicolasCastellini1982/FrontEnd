import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesMenuComponent } from './redes-menu.component';

describe('RedesMenuComponent', () => {
  let component: RedesMenuComponent;
  let fixture: ComponentFixture<RedesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
