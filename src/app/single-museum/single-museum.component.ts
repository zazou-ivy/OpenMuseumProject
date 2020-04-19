import { Component, OnInit, Input } from '@angular/core';
import { MuseumListService } from '../services/museumList.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-museum',
  templateUrl: './single-museum.component.html',
  styleUrls: ['./single-museum.component.css']
})


export class SingleMuseumComponent implements OnInit {

@Input() museumName: string;
@Input() museumAdress: string;
@Input() museumCP:string;
@Input() museumStreet:string;
@Input() museumPhone:string;
@Input() museumWebsite:string;
@Input() museumPlanning: string;
@Input () museumRef: any;


constructor(private museumListService : MuseumListService) { }

  ngOnInit() {
    // const museumRef = this.route.snapshot.params('ref_musee');
    // this.museumName = this.museumListService.getMuseumByRefMusee(+museumRef).nom_du_musee;
  }




}
