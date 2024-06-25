export interface Product {
  id: number;
  name: string;
  price: string;
  quantity: number;
  category: string;
  isDisabled: boolean;
  value: string;
}

export enum Access {
  Admin = "Admin",
  User = "User"
}
