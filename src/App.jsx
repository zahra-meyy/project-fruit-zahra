import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import Menus from "./component/Menus/Menus";
import Banner from "./component/Banner/Banner";
import Banner2 from "./component/Banner/Banner2";
import Banner3 from "./component/Banner/Banner3";
import Footer from "./component/Footer/Footer";

const App = () => {
  return (
    <>
     <main className="overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Menus />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Footer />
     </main>
    </>
  );
};

export default App;