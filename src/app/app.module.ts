import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MediaComponent } from './pages/media/media.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { MediaProfileComponent } from './pages/media-profile/media-profile.component';

// Components
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';

// Assets
import { DatePipe } from 'src/assets/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MediaComponent,
    SearchResultsComponent,
    MediaProfileComponent,
    HeaderComponent,
    BannerComponent,
    SearchBarComponent,
    MovieCardComponent,
    SpinnerComponent,
    DatePipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
