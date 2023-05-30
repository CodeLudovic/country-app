import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/country.services';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = []

  constructor(private countriesService: CountriesService) {}

  searchByCapital(term:string ): void{
    console.log('Desde ByCapitalPage');
    console.log({term});
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }

}
