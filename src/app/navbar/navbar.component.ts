import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  dropdownStates: { [key: string]: boolean } = {};
  submenuStates: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    // Initialize dropdown states
    this.dropdownStates = {
      'companyDropdown': false,
      'industryDropdown': false,
      'servicesDropdown': false
    };

    // Initialize submenu states
    this.submenuStates = {
      'consultingSubmenu': false,
      'installationSubmenu': false,
      'maintenanceSubmenu': false,
      'repairSubmenu': false
    };
  }

  toggleDropdown(id: string, state: boolean): void {
    this.dropdownStates[id] = state;
  }

  toggleSubmenu(id: string, state: boolean): void {
    this.submenuStates[id] = state;
  }
}