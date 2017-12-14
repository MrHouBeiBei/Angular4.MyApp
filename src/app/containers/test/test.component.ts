import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  a: Number = 5.6;

  constructor() { }

  ngOnInit() {

    console.log('test')
  }

}
