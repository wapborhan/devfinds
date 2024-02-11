"use client";
import { useEffect, useState } from "react";
import devList from "../../DevList.json";
import DevCard from "./DevCard";
import Loading from "../shared/loading/Loader";
import Link from "next/link";

const Developers = ({ searchData }) => {
  const [developers, setDevelopers] = useState([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState([]);

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
      setFilteredDevelopers(developersData);
    };

    fetchDevelopers();
  }, []);

  useEffect(() => {
    const filtered = developers.filter((dev) => {
      const lowercasedSearchData = searchData.toLowerCase();
      // Check if the developer's skills include the searched skill
      return (
        dev.name.toLowerCase().includes(lowercasedSearchData) ||
        dev.skills.some((skill) =>
          skill.toLowerCase().includes(lowercasedSearchData)
        ) ||
        dev.headline.toLowerCase().includes(lowercasedSearchData)
      );
    });
    setFilteredDevelopers(filtered);
  }, [searchData, developers]);

  const shuffleDeveloper = (array) => {
    const shuffledDeveloper = [...array];
    for (let i = shuffledDeveloper.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeveloper[i], shuffledDeveloper[j]] = [
        shuffledDeveloper[j],
        shuffledDeveloper[i],
      ];
    }
    return shuffledDeveloper;
  };

  return (
    <div className="sr-content pt--30">
      <div className="container">
        <div className="sect-main">
          <div className="rn-portfolio-area " id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb-4">
                    {/* <span className="subtitle">
                      Visit my portfolio and keep your feedback
                    </span> */}
                    <h2 className="title">Developer List</h2>
                    <div className="col-lg-12 mt-5 text-center">
                      <Link
                        className="rn-btn"
                        href="https://github.com/wapborhan/devfinds?tab=readme-ov-file#steps-to-add-your-profile-data"
                        target="__BLANK"
                      >
                        Add Your Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt--10 mt_md--10 mt_sm--10">
                {filteredDevelopers.length > 0 ? (
                  shuffleDeveloper(filteredDevelopers).map((devs, idx) => {
                    return <DevCard devs={devs} key={idx} />;
                  })
                ) : (
                  <Loading />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
