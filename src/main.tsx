import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import {
  useDispatch,
  useSelector,
  Provider,
  TypedUseSelectorHook,
} from "react-redux";
import { State, Dispatch, store } from "./Redux/Store";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="bg-primary">
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </div>
)
