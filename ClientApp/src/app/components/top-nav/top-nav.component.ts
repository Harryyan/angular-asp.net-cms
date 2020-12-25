import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
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
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
        {label: 'Open'},
        {separator: true},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {label: 'Delete', icon: 'pi pi-fw pi-trash'},
        {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      ]
    },
    {
      label: 'Help',
      icon: 'pi pi-fw pi-question',
      items: [
        {
            label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
        ]}
      ]
    },
    {
      label: 'Actions',
      icon: 'pi pi-fw pi-cog',
      items: [
        {
          label: 'Edit',
          icon: 'fa fa-refresh',
          items: [
            {label: 'Save', icon: 'pi pi-fw pi-save'},
            {label: 'Update', icon: 'pi pi-fw pi-save'},
          ]
        },
        {
          label: 'Other',
          icon: 'pi pi-fw pi-tags',
          items: [
            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
          ]
        }
      ]
    },
    {
        label: 'Quit', icon: 'pi pi-fw pi-times'
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
