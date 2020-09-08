import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // form tag equivalent
  contactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // form field equivalent
    this.contactForm = new FormGroup({
      name: new FormControl('satyam', Validators.required),
      phone: new FormControl('123456789', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('a@b.com', [Validators.required, Validators.email]),
    });
  }

  addContactHandler(): void{
    console.log(this.contactForm.value);
    this.contactService.createContact(this.contactForm.value)
     .subscribe(( res: any) => {
       console.log(res);
       if (res && res.id) {
        this.isSaved = true;
      }
    });
  }
  }
