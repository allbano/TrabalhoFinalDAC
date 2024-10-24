import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarMilhasComponent } from './comprar-milhas.component';

describe('ComprarMilhasComponent', () => {
  let component: ComprarMilhasComponent;
  let fixture: ComponentFixture<ComprarMilhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComprarMilhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComprarMilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
