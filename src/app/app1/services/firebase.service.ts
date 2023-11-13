import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { User } from './../models/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  ///////////////////Autenticacion Firebase /////////////////////////



  ////////////////Acceso Login//////////////////////
  singIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  ////////////////Crear Usuario//////////////////////
  singUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password)
  }

  ////////////////Actualizar datos registro Usuario//////////////////////
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

  ////////////////DB//////////////////////
  setDocument(path: string, data: any){
    return setDoc(doc(getFirestore(),path), data);

  }
    //////////////////Guarda el elemento del Form ///////////////////////
   async getDocument(path: string) {
      return (await getDoc(doc(getFirestore(),path))).data();
    }
}




//Herramientas FireBase
//////////////npm install -g firebase-tools//////////////////
