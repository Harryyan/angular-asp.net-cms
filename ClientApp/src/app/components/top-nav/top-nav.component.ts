import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Language } from '../../models/language';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { GlobalEventService } from '../../services/globalEvent.service';
import { GlobalEvent } from '../../models/GlobalEvent';

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  languages: Language[];
  currentLanguage: Language;

  items: MenuItem[];

  constructor(private globalEventService: GlobalEventService, private translateService: TranslateService) {
    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'Japanese', code: 'jp' }
    ];
    this.currentLanguage = this.languages[0];
    this.items = this.buildMenu();
  }

  ngOnInit() {
    this.translateService.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.items = this.buildMenu();

      },
    );
  }

  onLanguageChange(event) {
    console.log(event.value);
    console.log(event.type);
    this.globalEventService.languageChanged(event.value.code);
  }

  buildMenu(): MenuItem[] {
    return [
      {
        label: this.translateService.instant("demo.dashboard"),
        icon: 'pi pi-folder',
        routerLink: '/dashboard'
      },
      {
        label: this.translateService.instant("demo.products"),
        icon: 'pi pi-shopping-cart',
        routerLink: '/products'
      },
      {
        label: this.translateService.instant("demo.calendar"),
        icon: 'pi pi-calendar-plus',
        routerLink: 'dashboard'
      },
      {
          label: this.translateService.instant("demo.profile"),
          icon: 'pi pi-user-edit',
          routerLink: 'dashboard'
      }
    ];
  }
}
