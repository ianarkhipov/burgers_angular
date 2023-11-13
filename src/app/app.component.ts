import {Component, } from '@angular/core';
import {FormBuilder, Validators, } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ ReactiveFormsModule ],
})


export class AppComponent {


  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  })

  constructor(private fb: FormBuilder) {

  }



  scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"});
  }

  confirmOrder() {
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы скоро свяжемся с вами.")
    }
  }
}
