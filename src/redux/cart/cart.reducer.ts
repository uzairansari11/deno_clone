import { Cart } from "@/utils/types"

interface CartState{
    loading:boolean
    error: boolean
    cart:Cart[]
}


interface CartAction {
    type: string
    payload:any
}

const initialState = {
    loading: false,
    error: false,
    cart:[]
}


export const reducer = (state:CartState=initialState, action:CartAction) => {

    switch (action.type) {



        default:return state
    }
}