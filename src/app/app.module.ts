import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { RowComponent } from './components/row/row.component';
import { CreateRowComponent } from './components/create-row/create-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RowComponent,
    CreateRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
