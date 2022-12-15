import React from "react";
import Banner from "./banner";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <Banner />
      <Navbar />
      <main className="-mt-36 min-w-screen-full">
        {children}
      </main>
    </div>
  );
}
