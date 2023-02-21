import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  constructor() {}
  @Output() numberEvent = new EventEmitter<string>();
  @Output() operationEvent = new EventEmitter<string>();

  public digits: string[] = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'RESET'];
  public operations: string[] = ['/', '*', '-', '+', '='];

  public onNumberClicked(number: string) {
    this.numberEvent.emit(number)
  }

  public onOperationClicked(operation: string) {
    this.operationEvent.emit(operation)
  }
}