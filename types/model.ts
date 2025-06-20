import Realuse from "@/app/realuse/page";

type Author = {
  name: string;
  image: string;
  designation: string;
};

export type BlogModel = {
  _id: number;
  title: string;
  paragraph: string;
  image: string;
  content: string;
  type: string[];
  publishDate: string;
};

export type ServiceModel = {
  _id: number;
  title: string;
  description: string;
  image: string;
  tech: string;
  type: string[];
  publishDate: string;
};

export type RealuseModel = {
  _id: number;
  title: string;
  description: string;
  company: string;
  image: string;
  tech: string;
  publishDate: string;
};

export type OrderModel = {
  _id: number;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  items: [];
  totalAmount: number;
  status: string;
};

export type ProductModel = {
  _id?: number;
  title?: string;
  description?: string;
  price: number;
  image?: string;
  tech?: string;
  quantity: number;
  imageUrl?: string;
};
