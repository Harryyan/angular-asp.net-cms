import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';

import { TopNavComponent } from '../core/components/top-nav/top-nav.component';
import { LayoutComponent } from '../layouts/main/layout.component';

@NgModule({
  declarations: [
    TopNavComponent,
    LayoutComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    TranslateModule    
  ],
  exports: [
    FormsModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    TranslateModule,
    TopNavComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
