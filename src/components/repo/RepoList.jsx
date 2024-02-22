"use client";

import {
  FaRegStar,
  FaEye,
  FaExternalLinkAlt,
  FaRegCheckCircle,
} from "react-icons/fa";
import { VscRepoForked } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";

export default function Repos(user) {
  const repo = user?.repos;
  const pages = repo?.homepage;

  // console.log(repo);
  return (
    <>
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
                <Image
                  width={300}
                  height={300}
                  src={repo?.owner?.avatar_url}
                  className="img-fluid w-25 rounded-circle "
                  alt="Profile"
                />
                {/* <h6 className="bg-dark px-3 bg-opacity-50 rounded">
                        Borhan Uddin
                      </h6> */}
              </div>
            </div>

            <div className="content">
              <div className="head d-flex justify-content-between">
                <h4 className="title text-uppercase mb-5">
                  <Link href={repo?.html_url}>
                    <span style={{ color: "red", marginRight: "10px" }}>
                      <FaRegCheckCircle />
                    </span>
                    {repo?.name}
                    <i></i>
                  </Link>
                </h4>
                <div className="live">
                  {pages === null ? (
                    <></>
                  ) : (
                    <Link
                      href={repo?.homepage}
                      title="Live"
                      className="btn card-btn"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </div>
              <div className="category-info p-0">
                <div className="category-list">
                  {repo?.language ? (
                    <div
                      className={
                        "btn  p-3 text-light fw-bolder text-uppercase lang-btn " +
                        repo?.language.toLowerCase()
                      }
                    >
                      {repo?.language}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="meta">
                  <div className="card-btn-container d-flex">
                    <div>
                      <a className="btn card-btn" title="Star">
                        <FaRegStar />
                        {" " + repo?.stargazers_count}
                      </a>
                    </div>
                    <div>
                      <a className="btn card-btn" title="Watch">
                        <FaEye />
                        {" " + repo?.watchers_count}
                      </a>
                    </div>
                    <div>
                      <a className="btn card-btn" title="Fork">
                        <VscRepoForked /> {" " + repo?.forks_count}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
