import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.css']
})
export class SlideContentComponent implements OnInit {

  constructor() { }

  @Input() content:any;
  contentTitle: any ="Batman"
  ngOnInit(): void {
  }

}
