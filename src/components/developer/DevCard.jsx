import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaLocationArrow,
  FaMapMarkerAlt,
} from "react-icons/fa";

const DevCard = ({ devs }) => {
  const { avatar, name, portfolio, social, location, headline, bio, skills } =
    devs;

  const parts = devs?.avatar.split("/");
  const usernameWithExtension = parts[parts.length - 1];
  const username = usernameWithExtension.substring(
    0,
    usernameWithExtension.lastIndexOf(".")
  );

  return (
    <div className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30">
      <div className="rn-portfolio w-100">
        <div className="inner">
          <div className="thumbnail">
            {/* <a>
                <img src={RepoIMG} alt="WapBorhan" />
              </a> */}
            <div className="owner d-flex align-items-end"></div>
          </div>

          {devs ? (
            <div className="content">
              <h4 className="title text-uppercase mb-4 group/edit">
                {portfolio ? (
                  <Link href={`profile/${username}`} alt="Profile">
                    <span className="me-2">{name && name}</span>{" "}
                    <i className="text-sm">
                      <FaLocationArrow />
                    </i>
                  </Link>
                ) : (
                  ""
                )}
              </h4>
              <div className="head d-flex justify-content-between">
                <div className="cont">
                  <h5 className="mb-4">{headline && headline}</h5>
                  <div className="category-info p-0">
                    <div className="category-list justify-content-between">
                      <div className="social">
                        <div className="card-btn-container d-flex">
                          {social?.LinkedIn ? (
                            <Link
                              href={social?.LinkedIn && social?.LinkedIn}
                              className="btn card-btn"
                              title="Star"
                            >
                              <FaLinkedin />
                            </Link>
                          ) : (
                            ""
                          )}

                          {social?.GitHub ? (
                            <Link
                              href={social?.GitHub && social?.GitHub}
                              className="btn card-btn"
                              title="Star"
                            >
                              <FaGithubSquare />
                            </Link>
                          ) : (
                            ""
                          )}

                          {social?.Twitter ? (
                            <Link
                              href={social?.Twitter && social?.Twitter}
                              className="btn card-btn"
                              title="Star"
                            >
                              <FaTwitterSquare />
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Image
                  src={avatar && avatar}
                  height={400}
                  width={400}
                  alt="name"
                  // style={{ width: "30%", height: "30%" }}
                  className="img-fluid  rounded-circle avatar"
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
                <div className="category-list d-flex gap-2 flex-wrap">
                  {skills.map((skil, idx) => {
                    return (
                      <span
                        key={idx}
                        className={`btn  p-3 text-light fw-bolder capitalized ${skil.toLowerCase()}`}
                      >
                        {skil}
                      </span>
                    );
                  })}{" "}
                </div>
              </div>
              {/* <p className="mt-4">{bio}</p> */}
            </div>
          ) : (
            "Loading ..."
          )}
        </div>
      </div>
    </div>
  );
};

export default DevCard;
