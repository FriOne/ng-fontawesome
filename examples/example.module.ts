import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgFontawesomeModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgFontawesomeModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
