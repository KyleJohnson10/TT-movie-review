import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FilmsComponent } from './pages/films/films.component';
import { SeriesComponent } from './pages/series/series.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'series', component: SeriesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
