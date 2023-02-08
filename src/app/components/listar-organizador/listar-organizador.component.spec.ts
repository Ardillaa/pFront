import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrganizadorComponent } from './listar-organizador.component';

describe('ListarOrganizadorComponent', () => {
  let component: ListarOrganizadorComponent;
  let fixture: ComponentFixture<ListarOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOrganizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
