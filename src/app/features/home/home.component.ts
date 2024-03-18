import { Component } from '@angular/core';
import { GreatingComponent } from './components/greating/greating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreatingComponent],
  template: `
    <div>
      <h1>hello angular</h1>
      <app-greating />
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
