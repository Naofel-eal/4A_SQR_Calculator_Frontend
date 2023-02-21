import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.css']
})
export class InputBarComponent {
  @Input() currentNumber: string = '0';

  constructor() { }
}
