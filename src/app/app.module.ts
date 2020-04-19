import { JsonPlaceholderService } from "./services/json-placeholder.service";
import { DirectivesModule } from "./modules/directives/directives.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PlaygroundComponent } from "./components/playground/playground.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, PlaygroundComponent],
  imports: [BrowserModule, DirectivesModule, HttpClientModule],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
