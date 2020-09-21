/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToastrWrapperService } from './toastr-wrapper.service';

describe('Service: ToastrWrapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastrWrapperService]
    });
  });

  it('should ...', inject([ToastrWrapperService], (service: ToastrWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
