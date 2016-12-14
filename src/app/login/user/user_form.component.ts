import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User }    from '../../shared/user.service'; 

@Component({
  selector: 'user-form',
  templateUrl: 'user_form.component.html',
  styleUrls: ["user_form.component.css"]
})
export class UserFormComponent {
  submitted = false;
  form: FormGroup;
  

  constructor(private fb: FormBuilder, private user:User, private router:Router) {
    this.form = fb.group({
      'name': ['', Validators.required]
    });
  }

  onSubmit(form) { 
    console.log("SUBMT");
    this.user.setName(form.value.name)
    console.log(this.user.getName());
    this.router.navigate(['tables']); 
  }
}