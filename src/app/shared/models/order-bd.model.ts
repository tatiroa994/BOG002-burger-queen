export interface OrderBd {
  item: string;
  options: string[];
  price: number;
  quantity: number;
  'status-item'?: boolean;
}

export enum StatusOrder { //StatusOrder[0] StatusOrder['NUEVO'] colecciones de constantes
  NUEVO = 0,
  ENVIADO_COCINA = 1,
  EN_PREPARACION = 2,
}
export interface OrderData {
  client: string;
  products: OrderBd[];
  status: number;
  'total-order': number;
  waiter: string;
  'date-hour': number;
  table: string;
  'lead-time': string;
}

export interface OrderDataEdit {
  products: OrderBd[];
  'total-order': number;
}
export interface ItemPopup {
  product: string;
  quantity: number;
}
export interface DataUpdate {
  status: number;
  'lead-time'?: string;
}
