import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FilmsComponent } from './pages/films/films.component';
import { SeriesComponent } from './pages/series/series.component';

// Components
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

// Assets
import { DatePipe } from 'src/assets/pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FilmsComponent,
    SeriesComponent,
    HeaderComponent,
    BannerComponent,
    SearchBarComponent,
    MovieCardComponent,
    FilmsComponent,
    SpinnerComponent,
    DatePipe
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
