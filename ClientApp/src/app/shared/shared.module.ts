import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';

import { TopNavComponent } from '../core/components/top-nav/top-nav.component';
import { LayoutComponent } from '../core/components/layouts/main/layout.component';

@NgModule({
  declarations: [
    TopNavComponent,
    LayoutComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    CalendarModule,
    InputSwitchModule,
    ButtonModule,
    TranslateModule    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    CalendarModule,
    InputSwitchModule,
    ButtonModule,
    TranslateModule,
    TopNavComponent,
    LayoutComponent
  ]
})
export class SharedModule { }
