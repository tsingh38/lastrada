import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sizedropdown',
  templateUrl: './sizedropdown.component.html',
  styleUrls: ['./sizedropdown.component.scss']
})
export class SizedropdownComponent implements OnInit {
  sizeList=['Normal','Family','Party'];
  constructor() { }

  ngOnInit() {
  }

}
