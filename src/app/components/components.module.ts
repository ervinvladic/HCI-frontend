import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommentComponent } from './comment/comment.component';
import { SportCategoryComponent } from './sport-category/sport-category.component';

const routes = [
  // Define your routes here
  {
    path: 'homepage',
    loadChildren: () => import('../pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'footballfields',
    loadChildren: () => import('../pages/footballfields/footballfields.module').then(m => m.FootballfieldsModule)
  },
  {
    path: 'fieldpage',
    loadChildren: () => import('../pages/fieldpage/fieldpage.module').then(m => m.FieldpageModule)
  },
  {
    path: 'profilepage',
    loadChildren: () => import('../pages/profilepage/profilepage.module').then(m => m.ProfilepageModule)
  },
  {
    path: 'reservationspage',
    loadChildren: () => import('../pages/reservationspage/reservationspage.module').then(m => m.ReservationspageModule)
  }
];

@NgModule({
  declarations: [NavbarComponent, FooterComponent, CommentComponent, SportCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Add RouterModule.forChild with the routes
  ],
  exports: [NavbarComponent, FooterComponent, CommentComponent, SportCategoryComponent], // Include SportCategoryComponent in exports
})
export class ComponentsModule {}
