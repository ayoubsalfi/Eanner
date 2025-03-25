import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component {
  email: string = '';

  onSubmit() {
    // Action à effectuer au clic sur le bouton Get Started
    console.log('Email soumis :', this.email);
  }
}
