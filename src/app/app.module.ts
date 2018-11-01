import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubContainerComponent } from './sub-container/sub-container.component';
import { GlobalService } from './global.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { ArraySortPipePipe } from './array-sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubContainerComponent,
    ArraySortPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
