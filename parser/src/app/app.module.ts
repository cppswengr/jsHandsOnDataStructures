import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,

        // material
        BrowserAnimationsModule,
        MatButtonModule,
        MatGridListModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
