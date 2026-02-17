import { ApplicationConfig, Injectable } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Injectable()
export class CustomScrollBehavior {
  constructor(private viewportScroller: ViewportScroller) {}

  smoothScrollToAnchor() {
    this.viewportScroller.setOffset([0, 80]); // Adjust for fixed header
    this.viewportScroller.setHistoryScrollRestoration('manual');
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      })
    ),
    provideAnimationsAsync(),
    provideHttpClient(),
    CustomScrollBehavior
  ]
};