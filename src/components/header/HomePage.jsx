"use client";
import Header from "./Header";
import Developers from "../developer/Developers";
import Footer from "../Footer";
import { useState } from "react";

const HomePage = () => {
  const [searchData, setSearchData] = useState("");

  const handleDataSubmit = (data) => {
    setSearchData(data);
  };

  return (
    <>
      <Header onDataSubmit={handleDataSubmit} />
      <Developers searchData={searchData} />
      <Footer />
    </>
  );
};

export default HomePage;
