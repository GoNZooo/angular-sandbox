import {Component, OnDestroy, ViewChild} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {filter, map, shareReplay} from 'rxjs/operators';
import {NavigationEnd, Router, RouterEvent} from '@angular/router';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
})
export class MainNavigationComponent implements OnDestroy {
  @ViewChild('drawer') public drawer: MatSidenav;

  private _subscriptions = new Subscription();
  private _currentlyHandset: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay()
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this._subscriptions.add(
      this.isHandset$.subscribe((isHandset) => {
        this._currentlyHandset = isHandset;
      })
    );

    this._subscriptions.add(
      router.events
        .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
        .subscribe((_navigationEvent) => {
          if (this._currentlyHandset) {
            this.drawer
              .close()
              .then(() => {})
              .catch((error) => {
                console.error('Error closing drawer after navigation event:', error);
              });
          }
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
