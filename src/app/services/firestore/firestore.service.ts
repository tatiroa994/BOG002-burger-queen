import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrderData } from 'src/app/shared/models/order-bd.model';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: AngularFirestore) {}

  //Obtiene menu por campo
  public getMenuByType(colleccion: string, campo: string) {
    return this.firestore.collection(colleccion, (ref) => ref.where('tipo', '==', campo)).valueChanges();
  }
  //Obtiene todos los menus
  public getMenu(colleccion: string) {
    return this.firestore.collection(colleccion).get();
  }

  // Crea un nuevo pedido
  public createOrder(data: OrderData) {
    return this.firestore.collection('orders').add(data);
  }

  // Actualiza una mesa
  public updateOrder(documentId: string, data: OrderData) {
    return this.firestore.collection('table').doc(documentId).set(data);
  }

  // Obtiene pedidos activos por mesa

  public getActiveOrder() {
    return this.firestore.collection('tables').valueChanges();
  }
}
