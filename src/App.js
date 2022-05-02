import React from "react";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";
import { GlobalStyles } from "./components/Global.styled";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
