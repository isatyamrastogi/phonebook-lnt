import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contactList: any[];


  constructor(private contactService: ContactService) {

    console.log('Inside  Constructor');

   }

  ngOnInit(): void {

    console.log('Inside InIt');
    this.contactService.getContacts()
    .subscribe((res: any) => {
      console.log(res);
      this.contactList = res;
    });
  }


}
