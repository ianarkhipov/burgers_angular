import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {AppService} from "./app.service";
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [AppService, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
