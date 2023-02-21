import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './calculator/item/item.component';
import { InputBarComponent } from './calculator/input-bar/input-bar.component';
import { KeyboardComponent } from './calculator/keyboard/keyboard.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    InputBarComponent,
    KeyboardComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
