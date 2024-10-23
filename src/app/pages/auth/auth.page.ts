import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseeService } from 'src/app/services/firebasee.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  firebaseSvc = inject(FirebaseeService);

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.firebaseSvc.signIn(this.form.value as User).then(res =>{
        console.log(res);
      })
    }
  }

}
