import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { CountriesService } from '../../services/country.services';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit{

  public countries: Country[] = []

  public isLoading: boolean = false;

  public initialValue: string = '';

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {

    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;

  }

  searchByCapital(term:string ): void{

    this.isLoading = true;

    console.log('Desde ByCapitalPage');

    console.log({term});
    this.countriesService.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries
        this.isLoading = false;
      })
  }

}
