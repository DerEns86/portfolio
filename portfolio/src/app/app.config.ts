import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


export const provideTranslation = () => ({
  defaultLanguage: 'de',
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
});


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot(provideTranslation()),
      // Hier könntest du weitere Module importieren, die Providers bereitstellen
    ]),
    provideHttpClient(withFetch()),
  ]
};
