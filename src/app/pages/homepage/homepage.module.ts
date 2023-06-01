import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Homepage } from './homepage.component'

const routes = [
  {
    path: '',
    component: Homepage,
  },
]

@NgModule({
  declarations: [Homepage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Homepage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageModule {}
