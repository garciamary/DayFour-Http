import { RequestService } from './request.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DayFourHTTP';

  spaces: any = "";

  constructor(private _requestService:RequestService){

  }

  ngOnInit():void{
    this. _requestService.getSpaces().subscribe(
      (spaces: any) => {
        console.log(spaces);
        this.spaces = spaces;
      }
    )

  }
}
