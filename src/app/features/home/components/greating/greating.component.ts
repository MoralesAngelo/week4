import { Component } from '@angular/core';

@Component({
  selector: 'app-greating',
  standalone: true,
  imports: [],
  template: `
    <p>hola {{ user }}</p>

    <div>
      <label>
        <span>Nombre de usuario</span>
        <input type="text" />
      </label>
    </div>
  `,
  styles: ``,
})
export class GreatingComponent {
  user = 'pepe';
  avatar = 'algunlink';
  size = 100;
}
