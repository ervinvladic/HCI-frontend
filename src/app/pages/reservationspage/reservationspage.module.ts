import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Reservationspage } from './reservationspage.component'

const routes = [
  {
    path: '',
    component: Reservationspage,
  },
]

@NgModule({
  declarations: [Reservationspage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Reservationspage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReservationspageModule {}
