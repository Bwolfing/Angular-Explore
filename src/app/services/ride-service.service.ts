import { Injectable, Provider } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import 'rxjs/add/operator/map'
import { HttpClient, HttpClientModule } from '@angular/common/http';

export abstract class IRideService {
    abstract getEstimate(start: RideLocation, end: RideLocation): Observable<Estimate>
}

export const RideServiceProvider: Provider = {
    provide: IRideService,
    useFactory: (httpClient: HttpClient) => new RideService(httpClient),
    deps: [
        HttpClient
    ]
}

@Injectable()
class RideService implements IRideService {
    constructor(private http: HttpClient) {
    }

    getEstimate(start: RideLocation, end: RideLocation): Observable<Estimate> {
        return this.http.get<Estimate>("api/estimate");
    }
}
