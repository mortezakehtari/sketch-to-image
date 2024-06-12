import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SketchComponent } from './sketch/sketch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SketchComponent],
})
export class AppComponent {
  title = 'sketch';
}
