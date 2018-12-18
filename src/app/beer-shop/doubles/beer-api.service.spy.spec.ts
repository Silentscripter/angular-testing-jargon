import {of} from 'rxjs';
import {beerList} from './beer-list.stub.spec';

export class BeerApiServiceSpy {
  getList = jasmine.createSpy('getList')
    .and.returnValue(of([...beerList]));
}
