import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Language } from '../../../models/language.model';

import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { GlobalEventService } from '../../services/global/global-event.service';

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
        this.items = this.buildMenu()
      },
    );
  }

  onLanguageChange(event) {
    this.globalEventService.languageChanged(event.value.code);
  }

  buildMenu(): MenuItem[] {
    return [
      {
        label: this.translateService.instant("demo.offers"),
        icon: 'pi pi-list',
        routerLink: ['/offers/offerlist'],
        routerLinkActiveOptions: { exact:true }
      },
      {
        label: this.translateService.instant("demo.calendar"),
        icon: 'pi pi-calendar-plus',
        routerLink: ['/offers/calendar'],
        routerLinkActiveOptions: { exact:true }
      },
      {
        label: this.translateService.instant("demo.weatherforecasts"),
        icon: 'pi pi-globe',
        routerLink: ['/weatherforecasts'],
        routerLinkActiveOptions: { exact:true }
      },    
    ];
  }
}
