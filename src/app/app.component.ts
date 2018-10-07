import {Component, OnInit} from '@angular/core';
import {Film} from './modeles/myModeles';
import {Observable} from 'rxjs';
import {FilmService} from './services/film.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    films: any[] = [];

    constructor(private _FService: FilmService) {
    }

    ngOnInit() {
      /*  this._FService.getPopularMovies()
            .subscribe((data) => {
                console.log(data);
            },
                err => {
                    console.log('error', err);
                },
                () => {
                    console.log('Completed.');
                });
        console.log(this.films);
*/

    }

}
