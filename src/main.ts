import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'IDR' },
    { provide: LOCALE_ID, useValue: 'id-ID' }
  ]
}).catch(err => console.error(err));
