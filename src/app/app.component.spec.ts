import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { EstimateCalculatorComponent } from "./estimate-calculator/estimate-calculator.component";
import { IRideService } from "./services/ride-service.service"

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, EstimateCalculatorComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [
        IRideService.MockRideServiceProvider()
      ]
    }).compileComponents();
  }));
  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
