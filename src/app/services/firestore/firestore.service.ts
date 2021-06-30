import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrderData, OrderDataEdit } from 'src/app/shared/models/order-bd.model';

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

  //Guardar en el  historial de pedidos
  public createOrder(data: OrderData) {
    return this.firestore.collection('orders').add(data);
  }

  // Envia pedido activo a la mesa
  public updateOrder(documentId: string, data: OrderData) {
    return this.firestore.collection('tables').doc(documentId).update(data);
  }

  // editar pedido activo en la mesa #
  public updateOrderActive(documentId: string, data: OrderDataEdit) {
    return this.firestore.collection('tables').doc(documentId).update(data);
  }
  // Obtiene pedidos activos por mesa
  public getActiveOrders() {
    return this.firestore.collection('tables').valueChanges();
  }

  // Obtiene pedido activo por mesa especifica
  public getActiveOrder(documentId: string) {
    return this.firestore.collection('tables').doc(documentId).valueChanges();
  }

  //actualiza estado pedido actual
  public updateStatusCurrentOrder(status: { status: number }, idTable: string) {
    return this.firestore.collection('tables').doc(idTable).update(status);
  }

  //setear documento orden actual
  public setOrderActive(documentId: string, data: {}) {
    this.firestore.collection('tables').doc(documentId).set(data);
  }

  //Obtiene órdenes por status
  public getOrdersByStatus(status: number,) {
    return this.firestore.collection('tables', (ref) => ref.where('status', '==', status)).valueChanges();
  }
}
