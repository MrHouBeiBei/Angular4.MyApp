import { Component, OnInit } from '@angular/core';
import { Test } from 'app/model/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  a: Number = 5.6;

  testModel: Test
  // testModel: Test = new Test('女');

  constructor(
  ) { 
    this.testModel = new Test('女')
    console.log(this.test())  //4

  }

  ngOnInit() {

    console.log(this.testModel)
    console.log(Test.prototype.constructor)
    console.log(Test==Test.prototype.constructor)
    console.log(this.testModel.count)
    console.log(this.testModel.count())
    console.log(this.testModel.add())
  }

  test():number{
    return 2+2;
  }
}
