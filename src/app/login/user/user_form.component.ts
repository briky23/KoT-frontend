import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService }    from '../../shared/services/user.service'; 

@Component({
  selector: 'user-form',
  templateUrl: 'user_form.component.html',
  styleUrls: ["user_form.component.css"]
})
export class UserFormComponent {
  submitted = false;
  form: FormGroup;
  

  constructor(private fb: FormBuilder,
              private userService: UserService, 
              private router: Router) {
    this.form = fb.group({
      'name': ['', Validators.required]
    });
  }

  onSubmit(form) { 
    this.userService.setUser(form.value.name)
    this.router.navigate(['tables']); 
  }
}