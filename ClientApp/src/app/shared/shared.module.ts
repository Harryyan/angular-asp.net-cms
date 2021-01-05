import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { TranslateModule } from '@ngx-translate/core';

import { TopNavComponent } from '../core/components/top-nav/top-nav.component';
import { LayoutComponent } from '../layouts/main/layout.component';

@NgModule({
  declarations: [
    TopNavComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    MenubarModule,
    TranslateModule
  ],
  exports: [
    DropdownModule,
    MenubarModule,
    TranslateModule,
    TopNavComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
