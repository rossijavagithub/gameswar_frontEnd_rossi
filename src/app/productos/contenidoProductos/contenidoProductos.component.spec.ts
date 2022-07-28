import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoProductosComponent } from './contenidoProductos.component';

describe('ContenidoComponent', () => {
  let component: ContenidoProductosComponent;
  let fixture: ComponentFixture<ContenidoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenidoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
