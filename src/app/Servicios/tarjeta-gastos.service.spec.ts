import { TestBed } from '@angular/core/testing';

import { TarjetaGastosService } from './tarjeta-gastos.service';

describe('TarjetaGastosService', () => {
  let service: TarjetaGastosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetaGastosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
