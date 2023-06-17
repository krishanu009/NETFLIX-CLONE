import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
   content:any = [{mainTitle:"Harry Potter Marathon",item:[
   {title:"Harry Potter and Prisoner of Azkaban",src:"assets/img1-2.jpg"},
   {title:"Harry Potter and Order of the Phoneix",src:"assets/img1-3.jpg"},
   {title:"Harry Potter and Deathly Hallows Part 1",src:"assets/img1-4.jpg"},
   {title:"Harry Potter and Scoceres Stone",src:"assets/hp1.jpg"},
   {title:"Harry Potter and Chamber of Secrets",src:"assets/hp2.webp"},
   {title:"Harry Potter and Deathly Hallows Part 2",src:"assets/hp7.jpg"}

  ]},
   {mainTitle:"Anime",item:[{title:"Naruto",src:"assets/img5-1.jpg"},
   {title:"Attack on Titan",src:"assets/img5-2.jpg"},
   {title:"Death Note",src:"assets/img5-3.jpg"},
   {title:"Detective Conan",src:"assets/img5-4.jpg"},
   {title:"Kochikame",src:"assets/img5-5.webp"},
   {title:"Shinchan",src:"assets/img5-6.webp"}]},
   {mainTitle:"Popular on Netflix",item:[{title:"Batman",src:"assets/img1-3.jpg"}]},
   {mainTitle:"New Releases",item:[{title:"Batman",src:"assets/img1-4.jpg"}]}];
  ngOnInit(): void {
  }

  

}
