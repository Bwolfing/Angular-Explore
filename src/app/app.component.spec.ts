import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { of } from "rxjs/observable/of";
import { IMock, It, Mock } from "typemoq";

import { AppComponent } from './app.component';
import { EstimateCalculatorComponent } from "./estimate-calculator/estimate-calculator.component";
import { IRideService } from "./services/ride-service.service"
import { MockServiceProvider } from './test/MockServiceProvider';

describe('AppComponent', () => {
    const defaultEstimate: Estimate = {
        RideCost: 2.34,
        PrimeTimeRate: 0.15,
        Surcharge: 1.16,
        TotalCost: 3.5
    };

    let mockService: IMock<IRideService>;
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async(() => {
        mockService = Mock.ofType<IRideService>();
        mockService.setup(s => s.getEstimate(It.isAny(), It.isAny()))
        .returns(() => of(defaultEstimate))

        TestBed.configureTestingModule({
            declarations: [
                AppComponent, EstimateCalculatorComponent
            ],
            imports: [
                FormsModule
            ],
            providers: [
                MockServiceProvider.provide(IRideService).usingMock(mockService)
            ]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(AppComponent);
            app = fixture.debugElement.componentInstance;
        });
    }));

    it('should create the app', async(() => {
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'app'`, async(() => {
        expect(app.title).toEqual('app');
    }));

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
});
