import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

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
  stateCtrl = new FormControl();
  disableAutocomplete = true;
  filteredTag: Object;
  isDisable= true;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.data.returnbehaviorTagData().subscribe(contactTagData => this.tag$ = JSON.parse(JSON.stringify(contactTagData)));
    this.data.getNewTagData().subscribe(newTagData => this.newTagData$ = newTagData);
    this.data.getTags().subscribe(tagGot => this.tagData = tagGot);
    this.filteredTag = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(tag => {
          if (this.checkTagFilterd(tag)) {
            if (tag.substr(1)) {
              return this._filterStates(tag.substr(1));
            }
            else {
              return this.tagData.slice()
            }
          } else {
            this.onSearchChange(tag);
          }
        }
          )
      );
  }
  
  checkTagFilterd(string) {
    const patt = /#/g;
    return patt.test(string);
  }

  private _filterStates(value) {
    const filterValue = value.toLowerCase();
    return this.tagData.filter(tag => tag.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
  }

  onSearchChange(searchString) {
    this.data.searchByString(searchString);
  }
}
