import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

import { Alert, AlertType } from '../../models';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                 // clear alert messages
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }

    // subscribe to alerts
    getAlert(alertId?: string): Observable<any> {
        return this.subject.asObservable().pipe(filter((x: Alert) => x && x.alertId === alertId));
    }

    // convenience methods
    success(message: string) {
        this.clear();
        this.alert(new Alert({ message, type: AlertType.Success }));
    }

    error(message: string) {
        this.clear();
        this.alert(new Alert({ message, type: AlertType.Error }));
    }

    info(message: string) {
        this.clear();
        this.alert(new Alert({ message, type: AlertType.Info }));
    }

    warn(message: string) {
        this.clear();
        this.alert(new Alert({ message, type: AlertType.Warning }));
    }

    // main alert method    
    alert(alert: Alert) {
        this.keepAfterRouteChange = alert.keepAfterRouteChange;
        this.subject.next(alert);
    }

    // clear alerts
    clear(alertId?: string) {
        this.subject.next(new Alert({ alertId }));
    }
}
