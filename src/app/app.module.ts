import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppareilService} from './services/appareil.service';
import {AppareilComponent} from './composants/appareil/appareil.component';

@NgModule({
    declarations: [
        AppComponent,
        AppareilComponent,
        AppareilComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [AppareilService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
