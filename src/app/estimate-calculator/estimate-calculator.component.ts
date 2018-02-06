import { Component, OnInit } from '@angular/core';

import { IRideService } from "../services/ride-service.service";
import { error } from 'util';

@Component({
    selector: 'gc-estimate-calculator',
    templateUrl: './estimate-calculator.component.html',
})
export class EstimateCalculatorComponent implements OnInit {

    constructor(private rideService: IRideService) {
     }

    start: RideLocation = {
        Latitude: 0,
        Longitude: 0
    };
    end: RideLocation = {
        Latitude: 0,
        Longitude: 0
    };

    currentEstimate?: Estimate;

    ngOnInit() {
    }

    getEstimate() {
        this.rideService.getEstimate(this.start, this.end)
            .subscribe(estimate => this.currentEstimate = estimate);
    }
}
