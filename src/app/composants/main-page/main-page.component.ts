import {Component, OnInit, Output} from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Observable} from 'rxjs';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    films: Film[] = [];

    @Output() movies: Film[] = [];
    images: any[] = [];
    click = false;
    selected = '';

    constructor(private _FService: FilmService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this._FService.getPopularMovies()
        .subscribe((movie: any[]) => {
            this.movies = movie['results'];
            },
            (error) => console.log(error)
        );
    }
    selectedReceiver(event) {
        console.log('JE suis là !!! : ', event.value)
        this.click = true
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
