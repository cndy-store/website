import React, { Component } from 'react';
import { Nav, NavItem, NavLink, NavbarToggler, NavbarBrand } from 'reactstrap';

class Header extends Component {
  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarBrand href="#" />
        <Nav navbar>
          <NavItem className="px-3">
            <NavLink href="#/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/about">About</NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;
