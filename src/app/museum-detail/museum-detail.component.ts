import { Component, OnInit } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
// import { MuseumDetailComponent } from './museum-detail/museum-detail.component';

@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})
export class MuseumDetailComponent implements OnInit {

  // 1.variables

museumName: string;
 museumPhone:string;
museumWebsite:string;

  constructor(private museumListService: MuseumListService) { }

  ngOnInit() {
    // const museumRef = this.route.snapshot.params('ref_musee');
    // this.museumName = this.museumListService.getMuseumByRefMusee(+museumRef).nom_du_musee;
    // this.museumWebsite = this.museumListService.getMuseumByRefMusee(+museumRef).siteWeb;
    // this.museumPhone = this.museumListService.getMuseumByRefMusee(+museumRef).telephone;

  }

}
