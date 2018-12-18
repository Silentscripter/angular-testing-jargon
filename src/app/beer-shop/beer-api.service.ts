import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Beer} from './beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeerApiService {

  constructor(private http: HttpClient) {
  }

  getList(beerName: string = ''): Observable<Beer[]> {
    const query = this.getQuery(beerName);
    return this.http.get<Beer[]>(`https://api.punkapi.com/v2/beers${query}`);
  }

  private getQuery(beerName: string) {
    return beerName.length ? `?beer_name=${beerName}` : '';
  }
}
