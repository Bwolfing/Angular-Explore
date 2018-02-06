import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

export abstract class IRideService {
    abstract getEstimate(start: RideLocation, end: RideLocation): Observable<Estimate>
}

@Injectable()
export class RideService implements IRideService {
    constructor() { 
    }
    

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
