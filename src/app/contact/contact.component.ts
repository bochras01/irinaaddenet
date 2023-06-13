import { Component } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', [Validators.required])
  });

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
  }
  onSubmit() {

  }
}
