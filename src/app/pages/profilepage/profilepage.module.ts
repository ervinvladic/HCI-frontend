import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { Profilepage } from './profilepage.component'

const routes = [
  {
    path: '',
    component: Profilepage,
  },
]

@NgModule({
  declarations: [Profilepage],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Profilepage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfilepageModule {}
