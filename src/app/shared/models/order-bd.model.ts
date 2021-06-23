export interface OrderBd {
  item: string;
  options: string[];
  price: number;
  quantity: number;
}

export enum StatusOrder {
  'Mesa libre',
  'Enviado cocina' = 1,
  'En preparacion',
  'Para entregar',
  'En mesa',
  // available = 0,
  // onKitchen,
  // onPreparation,
  // toDeliver,
  // served,
  // finished,
}
export interface OrderData {
  client: string;
  products: OrderBd[];
  status: StatusOrder;
  'total-order': number;
  waiter: string;
  'date-hour': Date;
  table: number;
  idTable: number;
}
