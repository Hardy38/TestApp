import { Component, OnInit } from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FIlmComponent implements OnInit {

  public currentFilm: Film;
    private id: any;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Film : ', this._route.snapshot.params['id']);
  }

}
