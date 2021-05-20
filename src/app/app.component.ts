import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tailwind-angular';
  showFirstCard: boolean = true;
  showSecondCard: boolean = false;
  showThirdCard: boolean = false;


  showFirst() {
    this.showFirstCard = true;
    this.showSecondCard = false;
    this.showThirdCard = false;
  }
  showSecond() {
    this.showFirstCard = false;
    this.showSecondCard = true;
    this.showThirdCard = false;
  }
  showThird() {
    this.showFirstCard = false;
    this.showSecondCard = false;
    this.showThirdCard = true;
  }


}
