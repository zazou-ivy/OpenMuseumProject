import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MuseumListService } from './services/museumList.service';
import { AppComponent } from './app.component';
import { SingleMuseumComponent } from './single-museum/single-museum.component';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { IndexComponent } from './index/index.component';
import { MuseumDetailComponent } from './museum-detail/museum-detail.component';



const appRoutes: Routes = [
  { path: 'add', component : AddComponent }, //To add a museum
  { path: 'museumDetail', component: MuseumDetailComponent },
  { path: '', component: IndexComponent } //To create a home page => It's normal It is empty, there's nothing left in

]


@NgModule({
  declarations: [
    AppComponent,
    SingleMuseumComponent,
    IndexComponent,
    AddComponent,
    MuseumDetailComponent

  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],
  providers: [MuseumListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
