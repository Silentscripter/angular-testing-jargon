import {Component, OnInit} from '@angular/core';
import {Beer} from '../beer.model';
import {BeerApiService} from '../beer-api.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beerList: Beer[] = [];

  constructor(private beerApiService: BeerApiService) {
  }

  ngOnInit() {
    this.beerApiService.getList().subscribe(response => this.beerList = response);
  }

}
