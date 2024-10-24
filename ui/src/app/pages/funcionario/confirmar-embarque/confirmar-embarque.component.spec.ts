import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarEmbarqueComponent } from './confirmar-embarque.component';


describe('CrudFuncionarioComponent', () => {
  let component: ConfirmarEmbarqueComponent;
  let fixture: ComponentFixture<ConfirmarEmbarqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarEmbarqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarEmbarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
