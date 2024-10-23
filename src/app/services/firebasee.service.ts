import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {User} from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseeService {

  auth = inject(AngularFireAuth);

  // ========================Auntentificacion ==============================

  signIn(user : User){
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, user.email , user.password)
  }
}
