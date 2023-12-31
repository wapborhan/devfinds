import Image from "next/image";
import Link from "next/link";
import React from "react";

const DevCard = ({ devs }) => {
  const { avatar, name, portfolio, social, location, headline, bio } = devs;
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
                <h4 className="title text-uppercase mb-3">
                  <Link href={portfolio}>
                    <span>{name}</span>
                  </Link>
                </h4>
                <h2 className="mb-3">{headline}</h2>
                <h4 className="mb-5">{location}</h4>
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
            <div className="fd"></div>
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
                        LN
                        {/* <FaRegStar /> */}
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={social?.GitHub}
                        className="btn card-btn"
                        title="Star"
                      >
                        GT
                        {/* <FaRegStar /> */}
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={social?.Twitter}
                        className="btn card-btn"
                        title="Star"
                      >
                        TW
                        {/* <FaRegStar /> */}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="live">
                {portfolio === null ? (
                  <></>
                ) : (
                  <Link href={portfolio} title="Live" className="btn card-btn">
                    {/* <FaExternalLinkAlt /> */}
                    link
                  </Link>
                )}
              </div>
            </div>
            {/* <p className="justify-content-start m-0">
                      <div className=" d-block mt-5 h6 fw-normal text-dark">
                        <span>Crated on:</span>{" "}
                        {dateFormat(repo.created_at, "dS mmm yyyy")}
                      </div>

                      <div className=" d-block mt-3 mb-4 h6 fw-normal text-dark">
                        <span>Update on:</span>{" "}
                        {dateFormat(repo.updated_at, "dS mmm yyyy")}
                      </div>
                    </p> */}
            <p className="mt-4">{bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevCard;
