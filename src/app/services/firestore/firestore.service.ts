import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}
  //Crea un nuevo gato
  public createCat(data: { nombre: string; url: string }) {
    return this.firestore.collection('cats').add(data);
  }
  //Obtiene menu por campo
  public getMenuByType(colleccion: string, campo: string) {
    return this.firestore
      .collection(colleccion, (ref) => ref.where('tipo', '==', campo))
      .valueChanges();
  }
  //Obtiene todos los menus
  public getMenu(colleccion: string) {
    return this.firestore.collection(colleccion).get();
  }
  //Actualiza un gato
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }
}
