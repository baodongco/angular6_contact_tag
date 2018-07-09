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

  alerts = [];
  tag$: any;
  tagData = [];
  newTagData$ = [];
  show = true;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.data.returnbehaviorTagData().subscribe(contactTagData => this.tag$ = JSON.parse(JSON.stringify(contactTagData)));
    this.tagData = data.getTags();
    this.data.getNewTagData().subscribe(newTagData => this.newTagData$ = newTagData);
  }

  ngOnInit() {
  }

  onSearchChange(searchString) {
    this.data.searchByString(searchString);
  }
}
