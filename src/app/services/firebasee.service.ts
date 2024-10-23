import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {User} from '../models/user.models';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore,setDoc,doc, getDoc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirebaseeService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);

  // ======================== Auntentificacion ==============================

  //==== acceder=========
  signIn(user : User){
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, user.email , user.password)
  }

  //==== crear usuario=========
  signUP(user : User){
    const auth = getAuth()
    return createUserWithEmailAndPassword(auth, user.email , user.password)
  }

  //===== actualizar usuario =======
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser,{displayName})
  }


  //================== Base de datos ======================
  setDocument(path:string, data: any){
    return setDoc(doc(getFirestore(),path), data);
  }

  async getDocument(path:string){
    return (await getDoc(doc(getFirestore(),path))).data();
  }
  
}
