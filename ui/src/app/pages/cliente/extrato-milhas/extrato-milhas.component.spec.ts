import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtratoMilhasComponent } from './extrato-milhas.component';

describe('ExtratoMilhasComponent', () => {
  let component: ExtratoMilhasComponent;
  let fixture: ComponentFixture<ExtratoMilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExtratoMilhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExtratoMilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
