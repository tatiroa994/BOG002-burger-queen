export interface OrderBd {
  item: string;
  options: string[];
  price: number;
  quantity: number;
}

export enum StatusOrder {
  kitchen = 1,
  preparation,
  deliver,
  ready,
}

export interface OrderData {
  client: string;
  products: OrderBd[];
  status: StatusOrder;
  'total-order': number;
  waiter: string;
  'date-hour': Date;
  table:number
}
