import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-tag',
  templateUrl: './contact-tag.component.html',
  styleUrls: ['./contact-tag.component.scss']
})
export class ContactTagComponent implements OnInit {

  contactTag$: Object;
  newTagname: '';
  editMode = false;
  changedName = null;

  constructor(private route: ActivatedRoute, private data: DataService) {
    // this.route.params.subscribe( params => this.contactTag$ = params.id);
    this.data.getContactTag().subscribe(contactTagData => this.contactTag$ = contactTagData);
  }

  ngOnInit() {
  }

  openContact(event, item) {
    this.data.updateCurrentItem(item.id);
  }

  addTag(tagName, contactId, that) {
    if (tagName === '') {
      alert('Cannot add empty name tag');
    } else {
      that.value = '';
      this.data.addTag(tagName, contactId);
    }
  }

  updateTag(event, contactTag, tag) {
    this.data.updateContactTag(contactTag, tag);
  }

  removePropagation(even) {
    event.stopPropagation();
  }

  switchEditMode() {
    this.editMode = true;
  }

  deleteTag(event, tag) {
    if (confirm('Are you sure you want to delete tag: ' + tag.name + '?')) {
      this.data.deleteTag(this.createPureTag(tag));
    } else {
      // Do nothing!
    }
  }

  changeTagName(event, tag, name) {
    if (name === '') {
      alert('Tag name cannot be emppty');
    } else {
      if (confirm('Are you sure you want to change tag name from: ' + tag.name + ' to ' + name + '?')) {
        this.data.changeTag(name, this.createPureTag(tag));
      } else {
        // Do nothing!
      }
      this.editMode = false;
    }
  }

  createPureTag(tag) {
    const tmpTag = JSON.parse(JSON.stringify(tag));
    const finalTag = {
      'id': tmpTag.id,
      'name': tmpTag.name
    };
    return finalTag;
  }
}
