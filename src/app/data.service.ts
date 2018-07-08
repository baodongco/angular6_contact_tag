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

  result = [];
  currentObject = this.ContactData$[0];
  currentContactTagObject = [];
  behaviorCurrentObject = new BehaviorSubject(this.ContactData$[0]);
  behaviorContactData = new BehaviorSubject([]);
  behaviorSearchData = new BehaviorSubject([]);

  constructor() {
    this.initValue();
    this.behaviorCurrentObject.subscribe((value) => {
      this.currentObject = value;
    });
    this.behaviorContactData.subscribe(value =>
      this.currentContactTagObject = value
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
    return this.TagData$;
  }

  getContactTag() {
    const result = this.ContactData$;
    result.forEach(contact => {
      contact['tag'] = this.getTagByContact(contact.id);
    });
    this.currentContactTagObject = result;
    this.behaviorContactData.next(this.currentContactTagObject);
    return this.behaviorContactData;
  }

  getTagByContact(contactId) {
    const result = [];
    const tagId = [];
    const tagData = this.TagData$;
    if (this.ContactTagData$) {
      this.ContactTagData$.forEach(element => {
        if (element.contactId.toString() === contactId.toString()) {
          tagId.push(element.tagId);
        }
      });
      tagData.forEach(tag => {
        tagId.forEach(id => {
          if (id.toString() === tag.id.toString()) {
            const tempTag = tag;
            // tempTag['has'] = true;
            // tag['has'] = true;
            result.push(tempTag);
          } else {
            // tag['has'] = false;
            // result.push(tag);
          }
        });
        // if (!tag.hasOwnProperty('has')) {
        //   console.log('zzzz');
        //   tag['has'] = false;
        //   result.push(tag);
        // }
      });
      // tagData.forEach(tag => {
      //   result.forEach(tagResult => {

      //   });
      //   if (!tag['has']) {
      //     tag['has'] = false;
      //   }
      // });
    }
    console.log('result tag: ' + contactId + ' ket qua: ' + JSON.stringify(this.TagData$));
    return result;
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

  searchByContactCompany(contactCompany) {
    return;
  }

  searchByTag(tagName) {
    return;
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
        if (tag.name.toLowerCase().includes(searchString)) {
          element['visible'] = true;
        }
      });
    });
  }
}
