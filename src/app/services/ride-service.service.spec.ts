import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { It } from "typemoq";

import { IRideService, RideServiceProvider } from './ride-service.service';
import { debug } from 'util';

// https://medium.com/netscape/testing-with-the-angular-httpclient-api-648203820712
describe('RideService', () => {
    let injector: TestBed;
    let service: IRideService;
    let httpMock: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                RideServiceProvider
            ],
            imports: [
                HttpClientTestingModule
            ]
        })
        .compileComponents()
        .then(() => {
            injector = getTestBed();
            service = injector.get(IRideService);
            httpMock = injector.get(HttpTestingController);
        });
    }));
    afterEach(() => {
        // Ensure there are no outstanding HTTP requests.
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it("#getEstimate", () => {
        const expectedEstimate: Estimate = {
            PrimeTimeRate: 0.25,
            RideCost: 3.45,
            Surcharge: 2.25,
            TotalCost: 5.70
        };

        service.getEstimate(It.isAny(), It.isAny())
            .subscribe(e => {
                expect(e).toBe(expectedEstimate);
            });
        
        const request = httpMock.expectOne("api/estimate")

        expect(request.request.method).toBe("GET");

        // use the parameter as the HTTP response.
        request.flush(expectedEstimate);
    });
});
