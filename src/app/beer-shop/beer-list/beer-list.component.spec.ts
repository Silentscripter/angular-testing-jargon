import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {BeerListComponent} from './beer-list.component';
import {BeerApiService} from '../beer-api.service';
import {BeerApiServiceSpy} from '../doubles/beer-api.service.spy.spec';
import {beerList} from '../doubles/beer-list.stub.spec';
import {By} from '@angular/platform-browser';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let beerApiSpy: BeerApiServiceSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerListComponent],
      providers: [
        {provide: BeerApiService, useClass: BeerApiServiceSpy}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    beerApiSpy = TestBed.get(BeerApiService) as BeerApiServiceSpy;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should obtain a list of beers', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    expect(beerApiSpy.getList).toHaveBeenCalledTimes(1);
    expect(component.beerList).toEqual(beerList);
    fixture.detectChanges();
    const detailEls = fixture.debugElement.queryAll(By.css('p.beer'));
    expect(detailEls.length).toEqual(beerList.length);
  }));
});
