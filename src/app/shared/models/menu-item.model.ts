export interface MenuItem {
  item: string;
  price: string;
  url_img: string;
  options: Option;
}

export interface Option {
  unique: string[];
  multiples: string[];
}
