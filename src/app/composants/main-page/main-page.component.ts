import {Component, OnInit, Output} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Observable} from 'rxjs';
import {Film} from '../../modeles/myModeles';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    films: Film[] = [];

    @Output() movies: Film[] = [];
    images: any[] = [];

    constructor(private _FService: FilmService) {
    }

    ngOnInit() {
        this._FService.getPopularMovies()
        .subscribe((movie: any[]) => {
            this.movies = movie['results'];
            console.log(this.movies)
                for (let i = 0; i < this.movies.length; i++) {
                    this.images.push({source: `http://image.tmdb.org/t/p/w500
          ${this.movies[i].poster_path}`, alt: `${this.movies[i].original_title}` , title: `${this.movies[i].title}`});
                }
            },
            (error) => console.log(error)
        );
            /*.subscribe((data) => {
                this.films = data;
                    console.log('Résultat : ', data);
                },
                err => {
                    console.log('error', err);
                },
                () => {
                    console.log('Completed.');
                });*/
        // console.log('Résultat : ', this.films);
    }

    formatLabel(value: number | null) {
        if (!value) {
            return 0;
        }

        if (value >= 1000) {
            return Math.round(value / 1000);
        }

        return value;
    }

}
