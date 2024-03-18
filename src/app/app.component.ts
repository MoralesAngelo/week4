import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SampleNgComponent } from './shared/sample-ng/sample-ng.component';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SampleNgComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pages: string[] = ['home', 'sample'];
  currentPage: string = 'home';
  selectPage(page: string) {
    this.currentPage = page;
  }
}
