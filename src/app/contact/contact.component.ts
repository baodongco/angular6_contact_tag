import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable, interval } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact$ = null;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.data.returnBehaviorCurrentObject().subscribe(value => this.contact$ = value);
  }


  ngOnInit() {
  }

}
