import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trip } from '../models/trip';

 
@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';
  private tripUrl = `${this.apiBaseUrl}/trips`;

  public addTrip(newTrip: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    return this.http
      .post(this.tripUrl, FormData)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips(tripCode)');
    return this.http
      .get('${this.apiBaseUrl}trips')
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  public updateTrip(FormData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#updateTrip');
    console.log(FormData);
    return this.http
      .put(this.tripUrl + FormData.code, FormData)
      .toPromise()
      .then(response => response as Trip[])
      .catch(this.handleError);  
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
