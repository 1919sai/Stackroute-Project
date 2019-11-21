import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CricdataComponent } from './cricdata/cricdata.component';
import { CricapiService } from './cricapi.service';
import { CardComponent } from './card/card.component';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { CanactivateGuard } from './canactivate.guard';
import { StatisticsComponent } from './statistics/statistics.component';
import { UpdateComponent } from './update/update.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { TokeninterceptorService } from 'interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';



const routs:Routes=
[
  {
  path:'loginpage',
  component:LoginComponent
  },
  {
    path:'registerpage',
    component:RegisterComponent
  },
  {
    path:'dashboardpage',
  component:DashboardComponent,
  canActivate:[CanactivateGuard]
},
{
  path:'homepage',
  component:HomeComponent

},
{
  path:'favpage',
component:FavouriteComponent
},
{
  path:'Recpage',
component:RecommendationComponent
},
{
  path:'Statpage',
component:StatisticsComponent
},

{
  path:'updpage',
component:UpdateComponent
},
{
  path:'cardpage',
component:CricdataComponent

},
{
  path:'headerpage',
  component:HeaderComponent
  
},

{
  path:'',
  redirectTo:'homepage',
  pathMatch:'full'
}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    CricdataComponent,
    CardComponent,
    FavouriteComponent,
    RecommendationComponent,
    StatisticsComponent,
    UpdateComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatExpansionModule, 
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
     HttpClientModule,
      MatCardModule,
     FormsModule,
     ReactiveFormsModule,
     MatSelectModule,
     RouterModule,
     RouterModule.forRoot(routs),
     MatFormFieldModule,
     MatIconModule,
     MatExpansionModule,
     MatInputModule,
     MatSlideToggleModule,
     NgxPaginationModule,
     MatSnackBarModule

  
  ],
  providers: [/*
 {
  provide: HTTP_INTERCEPTORS,
  useClass: TokeninterceptorService ,
   multi: true
  }*/
],
  bootstrap: [AppComponent]
})
export class AppModule { }
