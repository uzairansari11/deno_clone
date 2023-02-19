import { Product } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

export const getProductsApi = async () => {
 const res: AxiosResponse<Product[]> = await axios.get(
  "https://clear-gold-singlet.cyclic.app/products"
 );

 return res.data;
};

export const getProductApi = async (id: string) => {
 const res: AxiosResponse<Product> = await axios.get(
  `https://clear-gold-singlet.cyclic.app/${id}`
 );

 return res.data;
};
