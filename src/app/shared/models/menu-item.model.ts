export interface MenuItem {
  item: string;
  price: number;
  url_img: string;
  options: Option;
}

export interface Option {
  unique: string[];
  multiples: string[];
}
