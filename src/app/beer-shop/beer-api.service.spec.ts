import {TestBed} from '@angular/core/testing';

import {BeerApiService} from './beer-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {beerList} from './doubles/beer-list.stub.spec';


describe('BeerApiService', () => {
  let service: BeerApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.get(BeerApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a list of beer from remote API', () => {
    let list: any;
    service.getList().subscribe(response => list = response);
    const testReq = httpMock.expectOne('https://api.punkapi.com/v2/beers');
    expect(testReq.request.method).toEqual('GET');
    testReq.flush(beerList);
    expect(list).toEqual(beerList);
  });

  it('should fetch a list of beer from remote API filtering by beer name', () => {
    let list: any;
    service.getList('Per').subscribe(response => list = response);
    const testReq = httpMock.expectOne('https://api.punkapi.com/v2/beers?beer_name=Per');
    expect(testReq.request.method).toEqual('GET');
    testReq.flush(beerList);
    expect(list).toEqual(beerList);
  });
});
