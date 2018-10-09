import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../modeles/myModeles';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-list-view',
    templateUrl: './list-view.component.html',
    styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

    // @Input() films: Film[] = [];

    films: Film[] = [];

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // this.route.snapshot.paramMap.get('test');
        /*this.route.queryParams.subscribe(params => {
            console.log('Params', params);
        });*/

        const t = this.route.snapshot.queryParamMap.get('test');
        console.log('Test : ', t)
    }

}
