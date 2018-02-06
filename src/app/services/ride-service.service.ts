import { Injectable, Provider } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import 'rxjs/add/operator/map'
import { HttpClient, HttpClientModule } from '@angular/common/http';

export abstract class IRideService {
    static readonly RideServiceProvider: Provider = {
        provide: IRideService,
        useFactory: (httpClient: HttpClient) => new RideService(httpClient),
        deps: [
            HttpClientModule
        ]
    };
    static MockRideServiceProvider(service?: IRideService): Provider {
        return {
            provide: IRideService,
            useFactory: () => service || new MockRideService
        };
    };

    abstract getEstimate(start: RideLocation, end: RideLocation): Observable<Estimate>
}

@Injectable()
class MockRideService implements IRideService {
    getEstimate(start: RideLocation, end: RideLocation): Observable<Estimate>
    {
        return of({
            TotalCost: 10.55,
            PrimeTimeRate: 0.15,
            RideCost: 9.55,
            Surcharge: 1
        });
    }
}

@Injectable()
class RideService implements IRideService {
    constructor(private http: HttpClient) {
    }

    getEstimate(start: RideLocation, end: RideLocation): Observable<Estimate>
    {
        debugger;
        return this.http.get<Estimate>("api/resitmate");
    }
}
