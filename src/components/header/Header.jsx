"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = ({ onDataSubmit }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = () => {
    onDataSubmit(inputData);
  };
  return (
    <div className="main-page-wrapper">
      <div className="rn-header-image-area">
        <div
          className="bg_image--9 bg_image h-100"
          style={{
            backgroundImage: `url("/assets/images/bg-image-9.jpg")`,
          }}
        ></div>
      </div>
      <div className="rn-content-wrapper">
        <div className="container">
          <div className="row padding-tb m_dec-top align-items-center d-flex">
            <div className="rn-portfolio-area " id="portfolio">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-4">
                    <h2 className="title mb-3">Find {"Dev's"}</h2>
                    <span className="subtitle">
                      Connect and Discover with Skilled Developers.
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 p-0">
                  <div className="h-search-form text-center">
                    <input
                      type="search"
                      name="search"
                      placeholder="Search by Name, Skills, Designation..."
                      value={inputData}
                      onChange={handleInputChange}
                    />
                    <button type="submit" onClick={handleSubmit}>
                      <FaSearch />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
