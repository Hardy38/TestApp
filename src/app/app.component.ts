import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Film} from './modeles/myModeles';
import {Observable} from 'rxjs';
import {FilmService} from './services/film.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    filmsObservable: Observable<Film[]>;

    constructor(private _FService: FilmService) {
    }

    ngOnInit() {
        this._FService.getPopularMovies()
            .subscribe((data) => {
                console.log(data);
            });
        console.log('data');
    }

}
