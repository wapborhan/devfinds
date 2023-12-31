"use client";
import { useEffect, useState } from "react";
import devList from "../../DevList.json";
import DevCard from "./DevCard";

const Developers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      const developersData = await Promise.all(
        devList.map(async (file) => {
          const dataResponse = await fetch(`/data/${file}`);
          const data = await dataResponse.json();
          return data;
        })
      );
      setDevelopers(developersData);
    };

    fetchDevelopers();
  }, []);

  console.log(developers);

  return (
    <div className="sr-content pt--30">
      <div className="container">
        <div className="sect-main">
          {/* <!-- Start Portfolio Area --> */}
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              {/* <div className="row">
                <div className="col-lg-12">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                    className="section-title text-center mb-4"
                  >
                    <span className="subtitle">
                      Visit my portfolio and keep your feedback
                    </span>
                    <h2 className="title">My Repositories</h2>
                  </div>
                </div>
              </div> */}

              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                {developers
                  ? developers.map((devs, idx) => {
                      return <DevCard devs={devs} key={idx} />;
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
