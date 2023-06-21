import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  isScrolled = false;
  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 1; 
  }

}
