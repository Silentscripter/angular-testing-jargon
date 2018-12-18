import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeerListComponent} from './beer-list/beer-list.component';

@NgModule({
  declarations: [
    BeerListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BeerListComponent]
})
export class BeerShopModule {
}
