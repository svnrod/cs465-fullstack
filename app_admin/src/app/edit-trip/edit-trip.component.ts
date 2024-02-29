import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripDataService } from '../../../services/trip-data.service';
import { Trip } from '../../../models/trip';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private tripService: TripDataService) { }

  ngOnInit() {
    //retrieve stashed tripID
    let tripCode = localStorage.getItem('tripCode');
    if(!tripCode) {
      alert("Something went wrong! Couldn't find where I stashed the trip code.");
      this.router.navigate(['']);
      return;
    }

    console.log("EditTripComponent#onInit found tripCode " + tripCode);

    //init form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]

    })

    console.log("EditTripComponent#onInit calling TripDataService#getTrip('" + tripCode + "')");

    //get trip data
    this.tripService.getTrip(tripCode)
      .then(data => {
        console.log(data);
        this.editForm.patchValue(data);
      })
  }

  onSubmit() {
    this.submitted = true;

    if(this.editForm.valid) {
      this.tripService.updateTrip(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['']);
        });
    }
  }

}
