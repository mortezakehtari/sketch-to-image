import { Component, OnInit } from '@angular/core';
import p5 from 'p5';
@Component({
  selector: 'app-sketch',
  standalone: true,
  imports: [],
  templateUrl: './sketch.component.html',
  styleUrl: './sketch.component.scss',
})
export class SketchComponent implements OnInit {
  canvas: any;
  canvasElement!: HTMLCanvasElement;
  sw = 2;
  c: any;

  constructor() {}

  ngOnInit() {
    const sketch = (s: any) => {
      s.setup = () => {
        s.width = 312;
        s.height = 235;
        let canvas2 = s.createCanvas(s.width, s.height);
        this.canvasElement = canvas2.elt as HTMLCanvasElement;
        canvas2.parent('sketch-holder');

        s.background(255);
        s.strokeWeight(this.sw);
        this.c = s.color(0, 0, 0);
        s.rect(0, 0, s.width, s.height);
        s.stroke(this.c);
      };

      s.draw = () => {
        if (s.mouseIsPressed) {
          if (s.mouseButton === s.LEFT) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
          } else if (s.mouseButton === s.CENTER) {
            s.background(255);
          }
        }
      };

      s.mouseReleased = () => {
        s.stroke(this.c);
        console.log(`color is now ${this.c}`);
      };

      s.keyPressed = () => {
        if (s.key === 'c') {
          window.location.reload();
        }
      };
    };

    this.canvas = new p5(sketch);
  }

  onSave() {
    // Get the canvas element
    if (this.canvasElement) {
      const dataURL = this.canvasElement.toDataURL();
    }
  }
}
