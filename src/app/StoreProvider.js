"use client";      // use CLient la où il y a le provider.
import React from "react";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      <NavBar />
      {children}
      <Footer />
    </Provider>
  );
}
