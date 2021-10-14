import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MediaComponent } from './pages/media/media.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { MediaProfileComponent } from './pages/media-profile/media-profile.component';




const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'media/:slug', component: MediaComponent },
  { path: 'search/:slug', component: SearchResultsComponent },
  { path: 'product/:slug', component: MediaProfileComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
