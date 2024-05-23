import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formcontact: FormGroup;

  constructor(private form : FormBuilder){
    this.formcontact = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],  
      email: ['',[Validators.required, Validators.email]]
    })
  }

  public user: iUserFormContact = {
    name: '',
    email: ''
  }

  enviar(){
    console.log(this.formcontact)
  }

  hasErrors(controlName: string, errorType: string){
    return this.formcontact.get(controlName)?.hasError(errorType) && this.formcontact.get(controlName)?.touched
  }

  statusForm(){
    return this.formcontact.status === 'INVALID' ? true : false
  }

}

export interface iUserFormContact {
  name: string;
  email: string;
}