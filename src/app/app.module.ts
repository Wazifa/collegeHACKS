import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoommateComponent } from './components/roommate/roommate.component';
import { RideComponent } from './components/ride/ride.component';
import { TextbooksComponent } from './components/textbooks/textbooks.component';
import { PostComponent } from './components/post/post.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import {MapService} from './map.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FirebaseService } from "./services/firebase.service";
import { AddRideComponent } from './add-ride/add-ride.component';
import { AddRoommateComponent } from './add-roommate/add-roommate.component';
import { AddTextbookComponent } from './add-textbook/add-textbook.component';

import { MapComponent } from './map/map.component';


const appRoutes:Routes = [
  {path:'', component: UserComponent},
  {path:'roommates', component:RoommateComponent},
  {path:'rides', component:RideComponent},
  {path:'display-books', component:TextbooksComponent},
  {path:'create-post', component:PostComponent}, 
  {path:'add-ride', component:AddRideComponent},
  {path:'need-roommate', component:AddRoommateComponent},
  {path:'need-textbook', component:AddTextbookComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    RoommateComponent,
    RideComponent,
    TextbooksComponent,
    PostComponent,
    AddRideComponent,
    AddRoommateComponent,
    AddTextbookComponent,
    MapComponent
  ],

  imports: [
    BrowserModule, HttpClientModule,
    FormsModule, RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule,
    NgbModule.forRoot(), NgbModule, SlideMenuModule, ReactiveFormsModule, 
    NgBootstrapFormValidationModule.forRoot(), NgbCarouselModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent] //  the main component
})
export class AppModule { }
