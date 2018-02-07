import { FactoryProvider } from "@angular/core";
import { IMock } from "typemoq";

export class MockServiceProvider {
    static provide(service: any): MockServiceProvider {
        let s = new MockServiceProvider();
        
        s._provider = {
            provide: service,
            useFactory: () => undefined
        };

        return s;
    }
    
    usingMock<T>(mock: IMock<T>): FactoryProvider {
        this._provider.useFactory = () => mock.object;
        return this._provider;
    }

    private _provider: FactoryProvider;

    private constructor() {
    }
}