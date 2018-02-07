import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { of } from "rxjs/observable/of";
import { Mock, It, Times } from "typemoq";

import { IRideService } from "../services/ride-service.service";

import { EstimateCalculatorComponent } from './estimate-calculator.component';

describe('EstimateCalculatorComponent', () => {
    let component: EstimateCalculatorComponent;
    let fixture: ComponentFixture<EstimateCalculatorComponent>;

    let defaultEstimate = {
        PrimeTimeRate: 0.25,
        RideCost: 8.75,
        TotalCost: 10.25,
        Surcharge: 1.5
    };
    let mockService = Mock.ofType<IRideService>();
    mockService.setup(s => s.getEstimate(
        It.isAny(),
        It.isAny()
    )).returns(() => of(defaultEstimate));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EstimateCalculatorComponent],
            imports: [
                FormsModule
            ],
            providers: [
                {
                    provide: IRideService,
                    useValue: mockService.object
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EstimateCalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it("should use the service's estimate when getEstimate() is called", async(() => {
        component.getEstimate();
        fixture.detectChanges();

        expect(component.currentEstimate).toBe(defaultEstimate);
        mockService.verify(s => s.getEstimate(It.isAny(), It.isAny()), Times.once());
    }));
});
