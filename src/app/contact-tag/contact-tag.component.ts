import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-tag',
  templateUrl: './contact-tag.component.html',
  styleUrls: ['./contact-tag.component.scss']
})
export class ContactTagComponent implements OnInit {

  contactTag$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    // this.route.params.subscribe( params => this.contactTag$ = params.id);
    this.data.getContactTag().subscribe(contactTagData => this.contactTag$ = contactTagData);
   }

  ngOnInit() {
  }

  public openContact(event, item) {
    this.data.updateCurrentItem(item.id);
  }

}
