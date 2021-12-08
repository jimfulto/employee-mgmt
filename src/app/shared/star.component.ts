import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rating: number;
  // cropWidth: number = 75;
  cropWidth: number;

  constructor() { }

  ngOnInit(): void {
    this.cropWidth = this.rating * 75 / 5;
  }
}