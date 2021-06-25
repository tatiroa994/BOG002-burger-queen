export interface OrderBd {
  item: string;
  options: string[];
  price: number;
  quantity: number;
}

export enum StatusOrder {
  NUEVO = 0,
  ENVIADO_COCINA = 1,
  EN_PREPARACION = 2,
}
export interface OrderData {
  client: string;
  products: OrderBd[];
  status: StatusOrder;
  'total-order': number;
  waiter: string;
  'date-hour': Date;
  table: string;
}

export interface OrderDataEdit {
  products: OrderBd[];
  'total-order': number;
}
