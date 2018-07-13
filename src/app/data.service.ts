import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ContactData$ = [{
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Romaguera-Crona',
    'email': 'Sincere@april.biz',
    'address': {
      'street': 'Kulas Light',
      'suite': 'Apt. 556',
      'city': 'Gwenborough',
      'zipcode': '92998-3874',
      'geo': {
        'lat': '-37.3159',
        'lng': '81.1496'
      }
    },
    'phone': '1-770-736-8031 x56442',
    'website': 'hildegard.org',
    'company': {
      'name': 'Romaguera-Crona',
      'catchPhrase': 'Multi-layered client-server neural-net',
      'bs': 'harness real-time e-markets'
    }
  }, {
    'id': 2,
    'name': 'Ervin Howell',
    'username': 'Antonette',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Deckow-Crist',
    'email': 'Shanna@melissa.tv',
    'address': {
      'street': 'Victor Plains',
      'suite': 'Suite 879',
      'city': 'Wisokyburgh',
      'zipcode': '90566-7771',
      'geo': {
        'lat': '-43.9509',
        'lng': '-34.4618'
      }
    },
    'phone': '010-692-6593 x09125',
    'website': 'anastasia.net',
    'company': {
      'name': 'Deckow-Crist',
      'catchPhrase': 'Proactive didactic contingency',
      'bs': 'synergize scalable supply-chains'
    }
  }, {
    'id': 3,
    'name': 'Clementine Bauch',
    'username': 'Samantha',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Romaguera-Jacobson',
    'email': 'Nathan@yesenia.net',
    'address': {
      'street': 'Douglas Extension',
      'suite': 'Suite 847',
      'city': 'McKenziehaven',
      'zipcode': '59590-4157',
      'geo': {
        'lat': '-68.6102',
        'lng': '-47.0653'
      }
    },
    'phone': '1-463-123-4447',
    'website': 'ramiro.info',
    'company': {
      'name': 'Romaguera-Jacobson',
      'catchPhrase': 'Face to face bifurcated interface',
      'bs': 'e-enable strategic applications'
    }
  }, {
    'id': 4,
    'name': 'Patricia Lebsack',
    'username': 'Karianne',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Robel-Corkery',
    'email': 'Julianne.OConner@kory.org',
    'address': {
      'street': 'Hoeger Mall',
      'suite': 'Apt. 692',
      'city': 'South Elvis',
      'zipcode': '53919-4257',
      'geo': {
        'lat': '29.4572',
        'lng': '-164.2990'
      }
    },
    'phone': '493-170-9623 x156',
    'website': 'kale.biz',
    'company': {
      'name': 'Robel-Corkery',
      'catchPhrase': 'Multi-tiered zero tolerance productivity',
      'bs': 'transition cutting-edge web services'
    }
  }, {
    'id': 5,
    'name': 'Chelsey Dietrich',
    'username': 'Kamren',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Keebler LLC',
    'email': 'Lucio_Hettinger@annie.ca',
    'address': {
      'street': 'Skiles Walks',
      'suite': 'Suite 351',
      'city': 'Roscoeview',
      'zipcode': '33263',
      'geo': {
        'lat': '-31.8129',
        'lng': '62.5342'
      }
    },
    'phone': '(254)954-1289',
    'website': 'demarco.info',
    'company': {
      'name': 'Keebler LLC',
      'catchPhrase': 'User-centric fault-tolerant solution',
      'bs': 'revolutionize end-to-end systems'
    }
  }, {
    'id': 6,
    'name': 'Mrs. Dennis Schulist',
    'username': 'Leopoldo_Corkery',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Considine-Lockman',
    'email': 'Karley_Dach@jasper.info',
    'address': {
      'street': 'Norberto Crossing',
      'suite': 'Apt. 950',
      'city': 'South Christy',
      'zipcode': '23505-1337',
      'geo': {
        'lat': '-71.4197',
        'lng': '71.7478'
      }
    },
    'phone': '1-477-935-8478 x6430',
    'website': 'ola.org',
    'company': {
      'name': 'Considine-Lockman',
      'catchPhrase': 'Synchronised bottom-line interface',
      'bs': 'e-enable innovative applications'
    }
  }, {
    'id': 7,
    'name': 'Kurtis Weissnat',
    'username': 'Elwyn.Skiles',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Johns Group',
    'email': 'Telly.Hoeger@billy.biz',
    'address': {
      'street': 'Rex Trail',
      'suite': 'Suite 280',
      'city': 'Howemouth',
      'zipcode': '58804-1099',
      'geo': {
        'lat': '24.8918',
        'lng': '21.8984'
      }
    },
    'phone': '210.067.6132',
    'website': 'elvis.io',
    'company': {
      'name': 'Johns Group',
      'catchPhrase': 'Configurable multimedia task-force',
      'bs': 'generate enterprise e-tailers'
    }
  }, {
    'id': 8,
    'name': 'Nicholas Runolfsdottir V',
    'username': 'Maxime_Nienow',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Abernathy Group',
    'email': 'Sherwood@rosamond.me',
    'address': {
      'street': 'Ellsworth Summit',
      'suite': 'Suite 729',
      'city': 'Aliyaview',
      'zipcode': '45169',
      'geo': {
        'lat': '-14.3990',
        'lng': '-120.7677'
      }
    },
    'phone': '586.493.6943 x140',
    'website': 'jacynthe.com',
    'company': {
      'name': 'Abernathy Group',
      'catchPhrase': 'Implemented secondary concept',
      'bs': 'e-enable extensible e-tailers'
    }
  }, {
    'id': 9,
    'name': 'Glenna Reichert',
    'username': 'Delphine',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Yost and Sons',
    'email': 'Chaim_McDermott@dana.io',
    'address': {
      'street': 'Dayna Park',
      'suite': 'Suite 449',
      'city': 'Bartholomebury',
      'zipcode': '76495-3109',
      'geo': {
        'lat': '24.6463',
        'lng': '-168.8889'
      }
    },
    'phone': '(775)976-6794 x41206',
    'website': 'conrad.com',
    'company': {
      'name': 'Yost and Sons',
      'catchPhrase': 'Switchable contextually-based project',
      'bs': 'aggregate real-time technologies'
    }
  }, {
    'id': 10,
    'name': 'Clementina DuBuque',
    'username': 'Moriah.Stanton',
    'linkedIn': 'abc@xyz.com',
    'tag': [],
    'skype': 'abcskype',
    'description': 'Working on Hoeger LLC',
    'email': 'Rey.Padberg@karina.biz',
    'address': {
      'street': 'Kattie Turnpike',
      'suite': 'Suite 198',
      'city': 'Lebsackbury',
      'zipcode': '31428-2261',
      'geo': {
        'lat': '-38.2386',
        'lng': '57.2232'
      }
    },
    'phone': '024-648-3804',
    'website': 'ambrose.net',
    'company': {
      'name': 'Hoeger LLC',
      'catchPhrase': 'Centralized empowering task-force',
      'bs': 'target end-to-end models'
    }
  }];

  TagData$ = [
    {
      'id': 1,
      'name': 'Consultant'
    },
    {
      'id': 2,
      'name': 'Mentor'
    },
    {
      'id': 3,
      'name': 'Service Provider'
    },
    {
      'id': 4,
      'name': 'Team Member'
    },
    {
      'id': 5,
      'name': 'Team Leader'
    }
  ];

  ContactTagData$ = [
    {
      'id': 1,
      'contactId': 1,
      'tagId': 1
    },
    {
      'id': 2,
      'contactId': 1,
      'tagId': 2
    },
    {
      'id': 3,
      'contactId': 2,
      'tagId': 3
    },
    {
      'id': 4,
      'contactId': 2,
      'tagId': 4
    },
    {
      'id': 5,
      'contactId': 3,
      'tagId': 5
    },
    {
      'id': 6,
      'contactId': 4,
      'tagId': 1
    }
  ];

  tagIdIndex = 6;
  contactTagIndex = 7;
  result = [];
  currentNewTag = [];
  currentObject = this.ContactData$[0];
  currentContactTagObject = [];
  currentTagObject = [];
  searchDataObject = [];
  behaviorCurrentObject = new BehaviorSubject(this.ContactData$[0]);
  behaviorContactData = new BehaviorSubject([]);
  behaviorTagData = new BehaviorSubject([]);
  behaviorNewTagData = new BehaviorSubject([]);
  behaviorSearchData = new BehaviorSubject([]);

  constructor() {
    this.initValue();
    this.behaviorCurrentObject.subscribe((value) => {
      this.currentObject = value;
    });
    this.behaviorContactData.subscribe(value =>
      this.currentContactTagObject = value
    );
    this.behaviorTagData.subscribe(value =>
      this.currentTagObject = value
    );
    this.behaviorNewTagData.subscribe(value =>
      this.currentNewTag = value
    );
  }

  initValue() {
    this.behaviorContactData = this.getContactTag();
    this.currentContactTagObject.forEach((element) => {
      element['visible'] = true;
    });
  }

  returnBehaviorCurrentObject() {
    return this.behaviorCurrentObject;
  }

  returnbehaviorTagData() {
    return this.behaviorTagData;
  }

  getContacts() {
    return this.ContactData$;
  }

  getCurrentItem() {
    return this.behaviorCurrentObject;
  }

  updateCurrentItem(itemId) {
    this.ContactData$.forEach(contact => {
      if (contact.id.toString() === itemId.toString()) {
        this.currentObject = contact;
        this.behaviorCurrentObject.next(this.currentObject);
      }
    });
  }

  updateContactTag(contactTag, tag) {
    let index = -1;
    if (tag.has) {
      for (let i = 0; i < this.ContactTagData$.length; i++) {
        // tslint:disable-next-line:max-line-length
        if ((this.ContactTagData$[i].contactId.toString() === contactTag.id.toString()) && (this.ContactTagData$[i].tagId.toString() === tag.id.toString())) {
          index = i;
          break;
        }
      }
      this.ContactTagData$.splice(index, 1);
      this.getContactTag();
    } else {
      const tmpContactTag = {
        'id': this.getContactTagIndex(),
        'contactId': contactTag.id,
        'tagId': tag.id
      };
      this.ContactTagData$.push(tmpContactTag);
      this.getContactTag();
    }
  }

  getContact(contactId) {
    let contact = null;
    this.ContactData$.forEach(element => {
      if (element.id.toString() === contactId.toString()) {
        contact = element;
      }
    });
    return contact;
  }

  getTags() {
    this.currentTagObject = this.TagData$;
    this.behaviorTagData.next(this.currentTagObject);
    return this.behaviorTagData;
  }

  getContactTag() {
    const result = this.ContactData$;
    result.forEach(contact => {
      contact['tag'] = this.getTagByContact(contact.id);
    });
    this.currentContactTagObject = result;
    this.behaviorContactData.next(this.currentContactTagObject);
    this.behaviorTagData.next(this.currentTagObject);
    return this.behaviorContactData;
  }

  getTagByContact(contactId) {
    const result = [];
    const tagId = [];
    const tagData = JSON.parse(JSON.stringify(this.TagData$));

    tagData.forEach(tag => {
      tag['has'] = false;
    });

    this.ContactTagData$.forEach(contactTag => {
      if (contactTag.contactId.toString() === contactId.toString()) {
        for (let i = 0; i < tagData.length; i++) {
          if (tagData[i].id.toString() === contactTag.tagId.toString()) {
            tagData[i]['has'] = true;
          }
        }
      }
    });
    return tagData;
  }

  searchByContactName(contactName) {
    let result = [];
    let contactDetail = null;
    if (this.ContactData$) {
      this.ContactData$.forEach(contact => {
        if (contact.name.toString() === contactName.toString()) {
          contactDetail = contact;
        }
      });
      result = contactDetail;
      result['tag'] = this.getTagByContact(contactDetail.id);
    }
    return result;
  }

  searchByString(searchString) {
    searchString = searchString.toLowerCase();
    this.ContactData$.forEach(element => {
      if (element.name.toLowerCase().includes(searchString) || element.company.name.toLowerCase().includes(searchString)) {
        element['visible'] = true;
      } else {
        element['visible'] = false;
      }
      element.tag.forEach(tag => {
        if (tag['has'] && tag.name.toLowerCase().includes(searchString)) {
          element['visible'] = true;
        }
      });
    });
  }

  addTag(tagName, contactId) {
    let continueFlag = true;
    this.TagData$.forEach(tag => {
      if (tag.name.toLowerCase() === tagName.toLowerCase()) {
        continueFlag = false;
        return 'Error 1: Tag name is existing.';
      }
    });
    if (continueFlag) {
      const self = this;
      const tmpTag = {
        'id': self.getTagIdIndex(),
        'name': tagName
      };
      self.TagData$.push(tmpTag);
      this.currentNewTag.push(tmpTag);
      this.behaviorNewTagData.next(this.currentNewTag);
      // self.ContactTagData$.push({
      //   'id': self.getContactTagIndex(),
      //   'contactId': contactId,
      //   'tagId': self.getTagIdIndex()
      // });
      this.getContactTag();
    }
  }

  changeTag(name, changedTag) {
    this.TagData$.forEach(tag => {
      if (tag.id.toString() === changedTag.id.toString()) {
        tag.name = changedTag.name;
      }
    });
    this.getContactTag();
  }

  removeNewTag() {
    this.currentNewTag.splice(0);
    this.behaviorNewTagData.next(this.currentNewTag);
  }

  deleteTag(tag) {
    let tmptIndex = -1;
    const tmpIndexArr = [];
    for (let i = 0; i < this.TagData$.length; i++) {
      if (this.TagData$[i].id.toString() === tag.id.toString()) {
        tmptIndex = i;
        break;
      }
    }
    this.TagData$.splice(tmptIndex, 1);
    for (let i = 0; i < this.ContactTagData$.length; i++) {
      if (this.ContactTagData$[i].tagId.toString() === tag.id.toString()) {
        tmpIndexArr.push(i);
      }
    }
    if (tmpIndexArr.length > 0) {
      tmpIndexArr.forEach(index => {
        this.ContactTagData$.splice(index, 1);
      });
    }
    this.getContactTag();
  }

  getNewTagData() {
    this.behaviorNewTagData.next(this.currentNewTag);
    return this.behaviorNewTagData;
  }

  getContactTagIndex() {
    this.contactTagIndex++;
    return this.contactTagIndex - 1;
  }

  getTagIdIndex() {
    this.tagIdIndex++;
    return this.tagIdIndex - 1;
  }

  getSearcAutoCompletehData(searchString) {
    this.ContactData$.forEach(contact => {
      if (contact.name.includes(searchString)) {
        this.searchDataObject.push(contact.name);
      } else if (contact.company.name.includes(searchString)) {
        this.searchDataObject.push(contact.company.name);
      }
    });
    this.TagData$.forEach(tag => {
      if (tag.name.includes(searchString)) {
        this.searchDataObject.push(tag.name);
      }
    });
    this.behaviorSearchData.next(this.searchDataObject);
    return this.behaviorSearchData;
  }

  getSearchData() {
    const result = [];
    this.ContactData$.forEach(contact => {
      result.push(contact.name);
      result.push(contact.company.name);
    });
    this.TagData$.forEach(tag => {
      result.push(tag.name);
    });
    this.behaviorSearchData.next(result);
    return this.behaviorSearchData;
  }
}
