import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.services';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = []

  @Input()
  public placeholder = 'Buscar por Paises'

  constructor(private countriesService: CountriesService) {}

  searchByCountry(term:string ): void{
    console.log('Desde ByCountry');
    console.log({term});
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }

}
