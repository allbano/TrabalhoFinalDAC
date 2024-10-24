import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetuarReservaComponent } from './efetuar-reserva.component';

describe('EfetuarReservaComponent', () => {
  let component: EfetuarReservaComponent;
  let fixture: ComponentFixture<EfetuarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EfetuarReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EfetuarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
