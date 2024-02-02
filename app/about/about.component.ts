import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
//Image interpolation/binding
imageUrl:string="./assets/bg3.jpg"; 
imageW: number = 1550;
imageH: number =600;

  clickCount=0
  clickMe(){
    this.clickCount+=1;
  }
}

