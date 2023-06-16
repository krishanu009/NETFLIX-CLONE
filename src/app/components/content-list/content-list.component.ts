import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})


export class ContentListComponent implements OnInit {
  mainTitle="Trending Now";
  items:any[] =[1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

}
