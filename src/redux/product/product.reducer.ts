import { Product } from "@/utils/types";
import * as types from "./product.types";

interface ProductState {
 loading: boolean;
 error: boolean;
 product: Product[];
}

const initialState = {
 loading: false,
 error: false,
 product: [],
};

interface ProductAction {
 type: string;
 payload?: any;
}

export const reducer = (state: ProductState = initialState, action: ProductAction) => {



 switch (action.type) {
  case types.PRODUCT_LOADING:
   return {
    ...state,loading: true,
   };

  case types.GET_PRODUCT:
   return {
  ...state,  loading: false,
    product: action.payload,
   };

  case types.PRODUCT_ERROR:
   return {
  ...state,  loading: false,
    error: true,
   };
  default:
   return state;
 }
};
