import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../services/film.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
    films: any[] = [];

  constructor(private _FService: FilmService) { }

  ngOnInit() {
      this._FService.getPopularMovies()
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
