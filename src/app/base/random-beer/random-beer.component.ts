import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from '../../shared/services/restaurant.service';

@Component({
  selector: 'app-random-beer',
  templateUrl: './random-beer.component.html',
  styleUrls: ['./random-beer.component.css']
})
export class RandomBeerComponent implements OnInit {
  @Input() data;
  constructor(private beerService: RestaurantService) { }

  ngOnInit() {
  }

  getRandomBeer() {
  }

  getRandomNonAlcoBeer() {
  }
}
