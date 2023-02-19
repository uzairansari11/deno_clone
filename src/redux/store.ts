import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {useDispatch,useSelector,TypedUseSelectorHook} from "react-redux"

import { reducer as CartReducer } from "./cart/cart.reducer";
import {reducer as ProductReducer } from './product/product.reducer'

const rootReducer = combineReducers({CartReducer,ProductReducer});

export type AppDispatch=typeof store.dispatch

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector
