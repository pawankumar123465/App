import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AllProjectComponent } from './all-project/all-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }     from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';



@NgModule({
  declarations: [
    AppComponent,
    
    AllProjectComponent,
    
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    
    

  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
