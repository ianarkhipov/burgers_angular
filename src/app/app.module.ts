import {CommonModule, NgFor} from "@angular/common";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  declarations: [AppComponent, NgFor],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
