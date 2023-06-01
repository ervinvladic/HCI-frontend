import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Fieldpage } from './fieldpage.component'

const routes = [
  {
    path: '',
    component: Fieldpage,
  },
]

@NgModule({
  declarations: [Fieldpage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Fieldpage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FieldpageModule {}
