import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  implements  OnInit {
  ngOnInit(): void {
}
  array = [ {epName:'Raju,Json,Hahhah', epAge:23, epempee:1234,date:'23/45/8888'}];

  conversion(){
    
      console.log('success')
    
  }


}
