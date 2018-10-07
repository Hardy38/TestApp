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
import { ListViewComponent } from './composants/list-view/list-view.component';
import { ListItemComponent } from './composants/list-item/list-item.component';
import { FIlmComponent } from './composants/film/film.component';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';


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
        ListViewComponent,
        ListItemComponent,
        FIlmComponent,
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
        MatInputModule,
        MatListModule,
        MatCheckboxModule,
        MatSliderModule

        // RouterModule.forRoot(appRoutes)
    ],
    providers: [FilmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
