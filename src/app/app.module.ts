import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDComponent } from './table-d/table-d.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CustomEditorComponent } from './custom-editor/custom-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TableDComponent,
    CustomEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
