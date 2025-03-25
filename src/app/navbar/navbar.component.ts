// navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dropdownStates: { [key: string]: boolean } = {};
  submenuStates: { [key: string]: boolean } = {};

  constructor() {
    this.dropdownStates = {};
    this.submenuStates = {};
  }

  toggleDropdown(menu: string, isOpen: boolean): void {
    this.dropdownStates = { ...this.dropdownStates, [menu]: isOpen };
  }

  toggleSubmenu(submenu: string, isOpen: boolean): void {
    this.submenuStates = { ...this.submenuStates, [submenu]: isOpen };
  }
}