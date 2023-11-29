import {Component,} from '@angular/core';
import {FormBuilder, Validators,} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})


export class AppComponent {


  form = this.fb.group({
    order: ["", Validators.required],
    name: ["", Validators.required],
    phone: ["", Validators.required],
  });

  productsData = [
    {
      image: "burger 1 3",
      title: "Бургер чеддер & бекон",
      text: "Котлета из говядины криспи, булочка, томат, сыр Чеддер, грудинка, лук красный, салат айсбер, майонез, кетчуп, сырный соус",
      price: 8,
      basePrice: 8,
      grams: 360
    },
    {
      image: "burger 10 1",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },
    {
      image: "burger 10 1",
      title: "BBQ с беконом и курицей",
      text: "Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ",
      price: 7,
      basePrice: 7,
      grams: 390
    },
    {
      image: "burger 12 1",
      title: "Дабл биф бургер",
      text: "Две говяжьи котлеты, сыр чеддер, салат романо, маринованные огурцы, свежий томат, бекон, красный лук, соус бургер, горчица",
      price: 10,
      basePrice: 10,
      grams: 420
    },
    {
      image: "burger 9 1",
      title: "Баварский бургер",
      text: "Булочка для бургера, говяжья котлета, красный лук, сыр, охотничья колбаска, соус барбекю, соус сырный, салат айсберг",
      price: 7,
      basePrice: 7,
      grams: 220
    },
    {
      image: "burger 6 1",
      title: "Бекон чизбургер",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, сыр, сырный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 220
    },
    {
      image: "burger 3 1",
      title: "Индиана бургер",
      text: "Булочка для бургера, котлета куриная, грудинка, яйцо, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 320
    },
    {
      image: "7",
      title: "Вегги бургер",
      text: "Булочка для бургера, вегетарианская котлета, красный лук, сыр, свежий томат, соус барбекю, соус сырный, салат айсберг",
      price: 8,
      basePrice: 8,
      grams: 280
    },
    {
      image: "8",
      title: "Плаксивый Джо",
      text: "Булочка для бургера, говяжья котлета, грудинка, помидор, огурец маринованный, красный лук, сыр, перец халапеньо, кетчуп, зелень",
      price: 7,
      basePrice: 7,
      grams: 380
    },
    {
      image: "9",
      title: "Двойной чиз бургер",
      text: "Булочка для бургера, две говяжьи котлеты, двойной сыр чеддар, огурец маринованный, криспи лук, кетчуп, соус сырный, горчица, зелень",
      price: 11,
      basePrice: 11,
      grams: 400
    },
    {
      image: "10",
      title: "Фрешбургер",
      text: "Булочка для бургера, говяжья котлета, бекон, сыр чеддар, яйцо, салями, соус барбекю, соус сырный, салат айсберг, свежий томат",
      price: 9,
      basePrice: 9,
      grams: 300
    },
    {
      image: "11",
      title: "Цуккини бургер",
      text: "Булочка для бургера, вегетарианская котлета из нута, цуккини на гриле, помидор, огурец маринованный, сыр, горчичный соус, кетчуп, зелень",
      price: 8,
      basePrice: 8,
      grams: 320
    },
    {
      image: "12",
      title: "Двойной бургер чеддар",
      text: "Булочка для бургера, котлета говяжья, грудинка, красный лук, огурец маринованный, томат, кетчуп, двойной сыр чеддар, горчица, зелень",
      price: 9,
      basePrice: 9,
      grams: 360
    },
  ];

  constructor(private fb: FormBuilder) {

  }


  scrollTo(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"});
  }

  confirmOrder() {
    if (this.form.valid) {
      alert("Спасибо за заказ! Мы скоро свяжемся с вами.")
      this.form.reset();
    }
  }
}
