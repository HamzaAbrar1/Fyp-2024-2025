import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import Store1 from "./Store/Store1.js";
import Layout3 from "./Layout3/Layout3.js";
import Address from "./Components/Address.js";
import Orders from "./Components/Orders.js";
import LLM from "./LLM.js";
import Cart from "./Cart.js";
import AdminSideBar from "./Components/AdminSideBar.js";
import EcommerceDashboard from "./Components/EcommerceDashboard.js";
import SaleAnalytics from "./Components/SaleAnalytics.js";
import AdminSideComponents from "./AdminSideComponents.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Store1 />}></Route>
      <Route path="/main" element={<App />} />
      <Route path="/LLM" element={<LLM />} />
      <Route path="/accountPart" element={<Layout3 />}>
        <Route path="" element={<Address />} />
        <Route path="order" element={<Orders />} />
      </Route>
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Ecomm" element={<EcommerceDashboard />} />
      <Route path="/Sales" element={<SaleAnalytics />} />
      <Route path="/Admin" element={<AdminSideComponents/>}/>

    
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <   <BrowserRouter/>> */}

    <Provider store={store}>
      <RouterProvider router={router} />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
