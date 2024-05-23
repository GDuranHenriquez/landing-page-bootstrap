import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formcontact: FormGroup;
  typeDni: string = 'DNI'
  /* userActive: string = 'Pedro' */

  /* infoUser: any = {
    name: 'Pedro',
    lastName: 'Azoka',
    dni: 123456
  } */

  
  //ngOnInit(): void {
   /*  this.formcontact.get('name')?.setValue(this.userActive); */
   //this.formcontact.get('lastName')?.clearValidators()
   //this.formcontact.get('lastName')?.updateValueAndValidity()
   //this.formcontact.patchValue({
    //name: this.infoUser.name,
    /* lastName: this.infoUser.lastName, */
    //dni: this.infoUser.dni
   //})
    //this.formcontact.get('name')?.disable();
    //this.formcontact.get('lastName')?.disable();
    //this.formcontact.get('dni')?.disable();
  //}

  //subcribe to form, listen to all form
  ngOnInit(): void {
    /* this.formcontact.valueChanges.subscribe(valor => {
      console.log(valor)
    }) */
    this.formcontact.get('typeDni')?.valueChanges.subscribe(value => {
      this.typeDni = value
      console.log(value)
    })
  }

  constructor(private form : FormBuilder){
    this.formcontact = this.form.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dni: ['', [Validators.required]],  
      email: ['',[Validators.required, Validators.email]],
      typeDni: ['DNI']
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