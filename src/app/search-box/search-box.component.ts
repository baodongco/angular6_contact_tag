import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  contactTagSearch$: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.data.getContactTag().subscribe(contactTagData => this.contactTagSearch$ = contactTagData);
   }

  ngOnInit() {
  }

  onSearchChange(searchString) {
    this.data.searchByString(searchString);
  }

}
