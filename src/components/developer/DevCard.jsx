import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaExternalLinkAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DevCard = ({ devs }) => {
  const { avatar, name, portfolio, social, location, headline, bio, skills } =
    devs;
  console.log(devs);
  return (
    <div
      // key={repo.id}
      data-aos="flip-left"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      data-aos-delay="600"
      data-aos-once="true"
      className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30"
    >
      <div className="rn-portfolio w-100">
        <div className="inner">
          <div className="thumbnail">
            {/* <a>
                <img src={RepoIMG} alt="WapBorhan" />
              </a> */}
            <div className="owner d-flex align-items-end">
              {/* <h6 className="bg-dark px-3 bg-opacity-50 rounded">
                        Borhan Uddin
                      </h6> */}
            </div>
          </div>

          <div className="content">
            <div className="head d-flex justify-content-between">
              <div className="cont">
                <h4 className="title text-uppercase mb-2 mt-4">
                  <Link href={portfolio}>
                    <span>{name}</span>
                  </Link>
                </h4>
                <h4 className="mb-3">{headline}</h4>
                <div className="category-info p-0">
                  <div className="category-list justify-content-between">
                    <div className="meta">
                      <div className="card-btn-container d-flex">
                        <div>
                          <Link
                            href={social?.LinkedIn}
                            className="btn card-btn"
                            title="Star"
                          >
                            <FaLinkedin />
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={social?.GitHub}
                            className="btn card-btn"
                            title="Star"
                          >
                            <FaGithubSquare />
                          </Link>
                        </div>
                        <div>
                          <Link
                            href={social?.Twitter}
                            className="btn card-btn"
                            title="Star"
                          >
                            <FaTwitterSquare />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src={avatar}
                height={400}
                width={400}
                alt="name"
                style={{ width: "30%", height: "30%" }}
                className="img-fluid  rounded-circle "
              />
            </div>
            <div className="location">
              <h4 className="mb-5 mt-5">
                <span className="me-3">
                  <FaMapMarkerAlt />
                </span>
                {location}
              </h4>
            </div>

            <div className="skills mt-4">
              <div class="category-list d-flex gap-2 flex-wrap">
                {skills.map((skil, idx) => {
                  return (
                    <span
                      key={idx}
                      class={`btn  p-3 text-light fw-bolder capitalized ${skil.toLowerCase()}`}
                    >
                      {skil}
                    </span>
                  );
                })}{" "}
              </div>
            </div>
            <p className="mt-4">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
