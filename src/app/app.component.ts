import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyPortfolio';
  openPDF() {
    window.open('assets/cv.pdf', '_blank');
  }
}
