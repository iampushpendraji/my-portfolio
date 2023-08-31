import { Component } from '@angular/core';
import { CommonServiceService } from './services/common-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-portfolio';
  isDarkMode: boolean = true;
  subscription: Subscription;

  constructor(private _commonService: CommonServiceService) {
    this.subscription = _commonService.lightDarkModeEmit.subscribe((status) => {
      this.isDarkMode = status;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
