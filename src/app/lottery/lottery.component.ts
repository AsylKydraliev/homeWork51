import {Component} from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent {
  constructor() {
    let numbersArr: number[] = [];
    for(let i = 0; i < 5; i++) {
     numbersArr.push(this.getRandomInt(5,36));
     numbersArr.sort();
    }
    console.log(numbersArr);
  }

  getRandomInt(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min)) + min;
  }
}
