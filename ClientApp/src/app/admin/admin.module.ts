import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { AdminRoutingModule } from './admin-routing.module';

import { DropdownModule } from 'primeng/dropdown';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TranslateModule,
    AdminRoutingModule
  ],
  declarations: [LayoutComponent, TopNavComponent]
})
export class AdminModule { }
