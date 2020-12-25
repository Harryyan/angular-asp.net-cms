import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from '../components/top-nav/top-nav.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    TranslateModule,
    AdminRoutingModule,
    MenubarModule
  ],
  declarations: [LayoutComponent, TopNavComponent]
})
export class AdminModule { }
