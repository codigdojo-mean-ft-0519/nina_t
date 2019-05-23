import { Component, OnInit } from '@angular/core';
import { Cake } from './cake.model';
import { CakeService } from './cake.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Rate my Cakes';
  cake = new Cake();
  cakes: Cake[];

  constructor(private cakeService: CakeService) {}

  ngOnInit(): void {}

  onSubmitCake(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('You clicked me! Our new cake is: ', this.cake);
    console.log('Next stop: the addCake function in our service.');
    this.cakeService.addCake(this.cake).subscribe(newCakeFromDB => {
      this.cakes.push(newCakeFromDB);
      console.log(
        'Reporting in from our component file! Got the following cake back from our DB: ',
        newCakeFromDB
      );
    });
    // console.log(
    //   'Our cakes array now contains the following cakes...',
    //   this.cakes
    // );
    this.cake = new Cake();
    console.log('Cake has been wiped, ready for the creation of a new cake!');
    form.reset();
  }

  onReviewCake(event: Event, form: NgForm) {
    console.log('You clicked me! Our cake to update is, ', this.cake);
    // let cakeRating = {
    //   rating: form.controls['rating']['value'],
    //   comment: form.controls['rating']['comment'],
    // };
    this.cakeService.updateCake(this.cake).subscribe(rankedCake => {
      console.log('What the heck');
    });
  }
}
