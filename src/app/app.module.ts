import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { FootballfieldsModule } from './pages/footballfields/footballfields.module';
import { FieldpageModule } from './pages/fieldpage/fieldpage.module';
import { ProfilepageModule } from './pages/profilepage/profilepage.module';
import { ReservationspageModule } from './pages/reservationspage/reservationspage.module';


const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'footballfields',
    loadChildren: () => import('./pages/footballfields/footballfields.module').then(m => m.FootballfieldsModule)
  },
  {
    path: 'fieldpage',
    loadChildren: () => import('./pages/fieldpage/fieldpage.module').then(m => m.FieldpageModule)
  },
  {
    path: 'profilepage',
    loadChildren: () => import('./pages/profilepage/profilepage.module').then(m => m.ProfilepageModule)
  },
  {
    path: 'reservationspage',
    loadChildren: () => import('./pages/reservationspage/reservationspage.module').then(m => m.ReservationspageModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    HomepageModule,
    FootballfieldsModule,
    FieldpageModule,
    ProfilepageModule,
    ReservationspageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
