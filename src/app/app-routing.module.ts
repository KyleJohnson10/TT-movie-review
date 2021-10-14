import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FilmsComponent } from './pages/films/films.component';
import { SeriesComponent } from './pages/series/series.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'search/:slug', component: SearchResultsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
