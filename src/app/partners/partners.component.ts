import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {
  activeTab: string = 'architects';

  tabs = [
    { id: 'architects', label: 'Architects' },
    { id: 'distributors', label: 'Distributors' },
    { id: 'contractors', label: 'Contractors' },
    { id: 'engineers', label: 'Engineers' },
    { id: 'property-managers', label: 'Property Managers' }
  ];

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
  }
}

