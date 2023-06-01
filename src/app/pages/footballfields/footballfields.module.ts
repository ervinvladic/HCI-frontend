import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Footballfields } from './footballfields.component'

const routes = [
  {
    path: '',
    component: Footballfields,
  },
]

@NgModule({
  declarations: [Footballfields],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Footballfields],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FootballfieldsModule {}
