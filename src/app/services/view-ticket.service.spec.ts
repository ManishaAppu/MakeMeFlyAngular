import { TestBed } from '@angular/core/testing';

import { ViewTicketService } from './view-ticket.service';

describe('ViewTicketService', () => {
  let service: ViewTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
