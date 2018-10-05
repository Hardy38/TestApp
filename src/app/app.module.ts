import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FilmService} from './services/film.service';
import { HttpClientModule } from '@angular/common/http';
/*

const appRoutes: Routes = [
    { path: 'appareils', component: AppareilViewComponent },
    { path: 'auth', component: AuthComponent },
    { path: '', component: AppareilViewComponent }
];
*/

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule
        // RouterModule.forRoot(appRoutes)
    ],
    providers: [FilmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
