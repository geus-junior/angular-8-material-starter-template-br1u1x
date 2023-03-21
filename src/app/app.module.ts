import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { IndeterminateCheckboxDirective } from './indeterminate-checkbox.directive';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    IndeterminateCheckboxDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
