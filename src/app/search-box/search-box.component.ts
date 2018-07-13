import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  alerts = [];
  tag$: any;
  tagData = [];
  newTagData$ = [];
  show = true;
  myControl = new FormControl();
  disableAutocomplete = true;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.data.returnbehaviorTagData().subscribe(contactTagData => this.tag$ = JSON.parse(JSON.stringify(contactTagData)));
    this.data.getNewTagData().subscribe(newTagData => this.newTagData$ = newTagData);
    this.data.getTags().subscribe(tagGot => this.tagData = tagGot);
  }

  ngOnInit() {
  }

  onSearchChange(searchString) {
    if (searchString === '#') {
      this.disableAutocomplete = false;
      console.log('asfd ' + JSON.stringify(this.tagData));
      // this.data.searchByString(searchString);
    } else {

      this.data.searchByString(searchString);
    }
  }

  callSomeFunction() {

  }
}
