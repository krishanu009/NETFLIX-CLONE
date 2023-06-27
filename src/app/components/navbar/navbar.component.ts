import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  isScrolled = false;
  openSearchBar =false;
  profileClick =  false;
  menuHover = false;
  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 1; 
  }

  openSearch()
  {
    this.openSearchBar = !this.openSearchBar;
  }
  profileClickedenter()
  {
   this.profileClick = true;
   
   
  }
  profileClickedleave()
  {
   this.profileClick = false;
   this.menuHover = false;
 
   
  }
  menuHoverdenter()
  {
    this.menuHover = true;
  }
  menuHoverdleave()
  {
    this.menuHover = false;
    this.profileClick = false;
    console.log("leave");
    
  }

}
