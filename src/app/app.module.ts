import {CommonModule, NgFor} from "@angular/common";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, NgFor],
  imports: [CommonModule],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
