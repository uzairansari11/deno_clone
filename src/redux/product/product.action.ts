import { AppDispatch } from "../store"
import { getProductsApi } from "./product.api"
import * as types from "./product.types"

export const getProducts = ():any => async(dispatch:AppDispatch) => {

    dispatch({ type: types.PRODUCT_LOADING })

    try {
        const data = await getProductsApi()
        dispatch({type:types.GET_PRODUCT,payload:data})
    } catch (error) {
dispatch({type:types.PRODUCT_ERROR})
    }



}