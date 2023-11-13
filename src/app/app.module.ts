import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
