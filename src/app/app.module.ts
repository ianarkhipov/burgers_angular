import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {AppService} from "./app.service";
import {provideRouter} from "@angular/router";
import {routes} from "./app.routes";
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [AppService, provideRouter(routes), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
