import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../src/app/storage';


 
@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

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

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = '${this.apiBaseUrl}/${urlPath}';
    return this.http
      .post(url, user)
      .toPromise()
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}
