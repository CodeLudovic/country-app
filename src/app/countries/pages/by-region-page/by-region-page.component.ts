import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/country.services';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = []

  @Input()
  public placeholder = 'Buscar por Regiones'

  constructor(private countriesService: CountriesService) {}

  searchByRegion(term:string ): void{
    console.log('Desde ByCountry');
    console.log({term});
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries
      })
  }

}
