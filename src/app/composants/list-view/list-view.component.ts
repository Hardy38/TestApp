import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    @Input() films: Film[] = [];
  liste = [
      {name: 'Film 1', detail: 'Détail 1'},
      {name: 'Film 2', detail: 'Détail 1'},
      {name: 'Film 3', detail: 'Détail 1'},
      {name: 'Film 4', detail: 'Détail 1'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
