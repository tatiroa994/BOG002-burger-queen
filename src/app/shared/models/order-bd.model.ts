export interface OrderBd {
  item: string;
  options: string[];
  price: number;
  quantity: number;
}

export enum StatusOrder {
  onKitchen = 1,
  onPreparation,
  toDeliver,
  served,
  finished,
}

export enum StatusTable {
  available= 1,
  unavailable,
}

export interface OrderData {
  client: string;
  products: OrderBd[];
  status: StatusOrder;
  'total-order': number;
  waiter: string;
  'date-hour': Date;
  table: number;
}
