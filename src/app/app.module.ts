import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers/root.reducer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as Views from './views';

export const VIEWS = [
  Views.CarListView,
];

@NgModule({
  declarations: [
    AppComponent,
    ...VIEWS,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers()),
    StoreDevtoolsModule.instrument({ maxAge: 100 }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
