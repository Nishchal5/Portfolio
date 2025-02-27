import React from "react";
import { Toaster } from "react-hot-toast";
import {
  About,
  Contact,
  Experience,
  Footer,
  Home,
  Navbar,
  Portfolio,
} from "./components";

export const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
