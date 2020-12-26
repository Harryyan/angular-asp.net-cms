import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { Language } from '../../models/language';

import { GlobalEventService } from '../../services/globalEvent.service';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  languages: Language[];
  currentLanguage: Language;

  items: MenuItem[] = [
    {
      label: 'Products',
      icon: 'pi pi-shopping-cart',
      routerLink: '/products'
    },
    {
      label: 'Calendar',
      icon: 'pi pi-calendar-plus',
      routerLink: 'dashboard'
    },
    {
        label: 'Profile',
        icon: 'pi pi-user-edit',
        routerLink: 'dashboard'
    }
  ];

  constructor(private globalEventService: GlobalEventService) {
    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'Japanese', code: 'jp' }
    ];
    this.currentLanguage = this.languages[0];
  }

  ngOnInit() {
  }

  onLanguageChange(event) {
    console.log(event.value);
    this.globalEventService.languageChanged(event.value.code);
  }

}
