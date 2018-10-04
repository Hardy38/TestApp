import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Film} from './modeles/myModeles';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    filmsObservable: Observable<Film[]>;
    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.filmsObservable = this.httpClient
            .get<Film[]>('https://api.themoviedb.org/3/search/movie?api_key=384da4d1d38ad08447d757fb4629fa6b&query=Jack+Reacher')
            .do(console.log);
    }

}
