import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CakeService } from './cake.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CakeDetailComponent } from './cake-detail/cake-detail.component';

@NgModule({
  declarations: [AppComponent, CakeDetailComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [CakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
