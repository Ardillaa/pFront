import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOrganizadorComponent } from './crear-organizador.component';

describe('CrearOrganizadorComponent', () => {
  let component: CrearOrganizadorComponent;
  let fixture: ComponentFixture<CrearOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOrganizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
