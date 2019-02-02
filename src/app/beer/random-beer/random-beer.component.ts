import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {
  @Input() data;
  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  getRandomBeer() {
    this.beerService.getRandomBeer();
  }

  getRandomNonAlcoBeer() {
    this.beerService.getRandomNonAlcoBeer();
  }
}
