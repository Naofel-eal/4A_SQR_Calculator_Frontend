import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  public currentNumber: string = '0';
  public firstNumber: string = '';
  public operation: string = '+';

  constructor() {}

  private init() {
    this.currentNumber = '0';
    this.firstNumber = '';
    this.operation = '+';
  }

  public onNumberClicked(event: string) {
    if(event === 'RESET') {
      this.init()
      return
    }
    this.currentNumber = this.currentNumber === '0' ? '' : this.currentNumber;
    this.currentNumber += event;
  }

  public onOperationClicked(event: string) {
    if(event === '=') {
      let result = this.getResult()
      this.currentNumber = '' + result
    }
    else if(event === '-' && this.currentNumber === '0') {
      this.onNumberClicked('-')
    }
    else {
      this.operation = event
      this.firstNumber = this.currentNumber;
      this.currentNumber = '0'
    }
  }

  getResult(): number {
    console.log(this.firstNumber, this.currentNumber, this.operation)
    let x: number = +this.firstNumber;
    let y: number = +this.currentNumber;
    let result: number;
    switch(this.operation) {
      case "+":
        result = x + y;
        break;
      case "-":
        result = x - y;
        break;
      case "*":
        result = x * y;
        break;
      case "/":
        result = x / y;
        break;
      default:
        result = x + y;
        break;
    }
    return result
  }
}
