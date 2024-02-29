import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { trips } from '../data/trips';
import { Trip } from '../../../models/trip';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input('trips') trips: any;
  
  constructor(private router: Router) { }
  
  

  ngOnInit(): void { }

  private editTrip(trip: Trip): void {
    localStorage.removeItem("tripCode");
    localStorage.setitem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

}


/** 
import { Component, OnInit, Input } from '@angular/core';
import { Trip } from '../models/trip';
import { CommentStmt } from '@angular/compiler';

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {

  @Input('trip') trip: any;
  constructor() { }

  ngOnInit() {
  }

} */