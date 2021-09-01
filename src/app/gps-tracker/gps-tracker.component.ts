import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-gps-tracker',
  templateUrl: './gps-tracker.component.html',
  styleUrls: ['./gps-tracker.component.css']
})
export class GpsTrackerComponent implements OnInit {
  zoom = 16;
  currentPosition: Point = {
    lat: 28.58000302984026,
    lon: 77.39120083331957
  };
  points: Point[] = [];
  tmpPoints: Point[] = [
    this.currentPosition,
    {
      lat: 28.580370468755813,
      lon: 77.39042835716428
    },
    {
      lat: 28.58030451827575,
      lon: 77.38995628840271
    },
    {
      lat: 28.580775592226036,
      lon: 77.38902287971506
    },
    {
      lat: 28.58111476416374,
      lon: 77.38888340485369
    },
    {
      lat: 28.581557570325106,
      lon: 77.38851862444703
    },
    {
      lat: 28.581557570325106,
      lon: 77.38851862444703
    },
  ]

  constructor() { }


  ngOnInit() {
    let i = 0;
    const obs = interval(2000)
      .pipe(takeWhile((v) => i < this.tmpPoints.length))
      .subscribe(() => {
        const pos = this.tmpPoints[i];
        this.points.push(pos);
        this.currentPosition = pos;
        i++;
      });
  }
}
// just an interface for type safety.
interface Point {
  lat: number;
  lon: number;
}
