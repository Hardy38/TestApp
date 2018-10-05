import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FilmService} from './services/film.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainPageComponent } from './composants/main-page/main-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ResearchComponent } from './composants/research/research.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
        MainPageComponent,
        ResearchComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule

        // RouterModule.forRoot(appRoutes)
    ],
    providers: [FilmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
