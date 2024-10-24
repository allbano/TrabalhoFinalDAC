import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVooComponent } from './cadastro-voo.component';

describe('CadastroVooComponent', () => {
  let component: CadastroVooComponent;
  let fixture: ComponentFixture<CadastroVooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CadastroVooComponent]
    });
    fixture = TestBed.createComponent(CadastroVooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
