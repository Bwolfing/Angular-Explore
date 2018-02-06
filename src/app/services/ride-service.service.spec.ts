import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";

import { IRideService } from './ride-service.service';

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
describe('RideServiceService', () => {
  let injector: TestBed;
  let service: IRideService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IRideService.RideServiceProvider
      ],
      imports: [
        HttpClientTestingModule
      ]
    }).then(() => {
      injector = getTestBed();
      service = inject.get(IRideService);
      httpMock = inject.get(HttpTestingController);
    });
  });

  it('should be created', inject([IRideService], (service: IRideService) => {
    expect(service).toBeTruthy();
  }));

  it("should be the same estimate as the web api", inject([IRideService], (service: IRideService) => {
    service.getEstimate({ Latitude: 0, Longitude: 0}, { Latitude: 0, Longitude: 0 }).subscribe(e => {
      expect(e).toBe(InMemoryRideCalculator.estimate);
    });
  }));
});
