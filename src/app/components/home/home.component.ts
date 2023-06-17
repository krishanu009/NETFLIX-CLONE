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
   {mainTitle:"Comedy",item:[{title:"Friends",src:"assets/img4-2.webp"},
   {title:"Kathal",src:"assets/img4-3.jpg"},
   {title:"Two & a Half Men",src:"assets/img4-1.jpg"},
   {title:"Big Bang Theory",src:"assets/img4-4.jpg"},
   {title:"How I Met Your Mother",src:"assets/him.webp"},
   {title:"Rick & Mortey",src:"assets/rm.jpg"}]},
   {mainTitle:"Popular on Netflix",item:[{title:"Money Heist",src:"assets/img3-1.jpg"},
   {title:"Queens Gambit",src:"assets/img3-2.jpg"},
   {title:"You",src:"assets/img3-3.jpg"},
   {title:"Dark",src:"assets/img3-4.webp"},
   {title:"Wednesday",src:"assets/img3-5.png"},
   {title:"Lucifer",src:"assets/img3-6.webp"}]},
   {mainTitle:"Critically Aclaimed Tv Shows",item:[{title:"The Haunting of Hill House",src:"assets/img2-1.jpg"},
   {title:"Narcos",src:"assets/img2-2.jpg"},
   {title:"The Witcher",src:"assets/img2-3.jpg"},
   {title:"Strangers things",src:"assets/img2-4.jpg"},
   {title:"Riverdale",src:"assets/img2-5.webp"},
   {title:"Sandman",src:"assets/img2-6.webp"}]}
   ];
  ngOnInit(): void {
  }

  

}
