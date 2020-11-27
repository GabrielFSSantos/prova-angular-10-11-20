import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './cep.service';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
	providers: [CepService],
	bootstrap: [AppComponent]
})
export class AppModule { }
