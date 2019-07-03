import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListingComponent} from './list/listing.component';

const routes: Routes = [
  {path: 'home', component: ListingComponent},
  {path: '**', component: ListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
