import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MiddleParentComponent } from './middle-parent/middle-parent.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, MiddleParentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
