import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

import { GlobalEventService } from './services/globalEvent.service';
import { GlobalEvent } from './models/GlobalEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Plexure Angular Demo';

  constructor(private config: PrimeNGConfig,
              private translateService: TranslateService,
              private globalEventService: GlobalEventService) {}

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.globalEventService.langEvent.subscribe((event: GlobalEvent) => {
      if (event.type == "lang") {
        this.translate(event.state);
      }
    });
  }

  translate(lang: string) {
    this.translateService.use(lang);
    this.translateService.get('primeng').subscribe(res => this.config.setTranslation(res));
  }
}
