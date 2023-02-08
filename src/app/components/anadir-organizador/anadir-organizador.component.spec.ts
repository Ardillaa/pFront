import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirOrganizadorComponent } from './anadir-organizador.component';

describe('AnadirOrganizadorComponent', () => {
  let component: AnadirOrganizadorComponent;
  let fixture: ComponentFixture<AnadirOrganizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnadirOrganizadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirOrganizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
