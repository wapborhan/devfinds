"use client";
import Header from "./header/Header";
import Developers from "./developer/Developers";
import Footer from "./footer/Footer";
import { useState } from "react";
import Dark from "./shared/theme/Dark";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");

  const handleDataSubmit = (data) => {
    setSearchData(data);
  };

  return (
    <>
      <Header onDataSubmit={handleDataSubmit} />
      <Developers searchData={searchData} />
      <Dark />
      <Footer />
    </>
  );
};

export default HomePage;
