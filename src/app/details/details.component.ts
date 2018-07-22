import { Component, OnInit } from '@angular/core';
import { GameHttpService } from "../game-http.service";
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public currentBook;
  public currentCharacter;
  public currentHouse;
  
  constructor(private _route: ActivatedRoute,private router: Router,private gameHttpService: GameHttpService) { 
    console.log("Details constructor is called.")
  }

  ngOnInit() {
    console.log("Details onInit is called.")

    
    //for books
    let bookId = this._route.snapshot.paramMap.get('bookId');
    console.log(bookId);
    this.gameHttpService.getSingleBookInfo(bookId).subscribe(

      data => {
        console.log("Books data");
        console.log(data);
        this.currentBook = data;
        for(let item in this.currentBook){
          if(this.currentBook[item]==""){
            this.currentBook[item]="N/A"
          }
        }
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

    //for characters
    let characterId = this._route.snapshot.paramMap.get('characterId');
    console.log(characterId);
    this.gameHttpService.getSingleCharacterInfo(characterId).subscribe(

      data => {
        console.log("Characters data");
        console.log(data);
        this.currentCharacter = data;
        for(let item in this.currentCharacter){
          if(this.currentCharacter[item]==""){
            this.currentCharacter[item]="N/A"
          }
        }
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )

    //for houses
    let houseId = this._route.snapshot.paramMap.get('houseId');
    console.log(houseId);
    this.gameHttpService.getSingleHouseInfo(houseId).subscribe(

      data => {
        console.log("Houses data");
        console.log(data);
        this.currentHouse = data;
        for(let item in this.currentHouse){
          if(this.currentHouse[item]==""){
            this.currentHouse[item]="N/A"
          }
        }

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
  }

}
