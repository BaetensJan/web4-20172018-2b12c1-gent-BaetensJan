/* "Barrel" of Http Interceptors */
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthenticationInterceptor} from './authentication-interceptor';
import {BaseUrlInterceptor} from './base-url-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true
  }
];

export const basehttpInterceptorProviders = [
 {
 provide: HTTP_INTERCEPTORS,
 useClass: BaseUrlInterceptor,
 multi: true
 }
];