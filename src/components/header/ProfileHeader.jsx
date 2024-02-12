import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProfileHeader = ({ data }) => {
  return (
    <>
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
            <a class="p-3 router-homepage" href="/">
              <div class=" rounded ">Home Page</div>
            </a>
            <div className="row padding-tb m_dec-top align-items-center d-flex">
              <div className="col-lg-6">
                <div className="header-left">
                  <div className="header-thumbnail">
                    <Image
                      width={400}
                      height={400}
                      alt={data?.name}
                      src={data.avatar_url}
                    />
                  </div>
                  <div className="header-info-content">
                    <h4 className="title">
                      <Link href={data.html_url}>
                        {data?.name}
                        {/* <FaExternalLinkAlt className="ms-3" /> */}
                      </Link>
                    </h4>
                    <div className="status-info mb-5">
                      <span className="me-3">
                        <FaMapMarkerAlt />
                      </span>
                      {data.location}
                    </div>
                    <div className="status-info mb-3 px-5">{data.bio}</div>

                    {/* <!-- end --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header-right">
                  {/* <!-- Start skiull area --> */}
                  <div className="skill-area section-height skill-main ">
                    <div className="inner slide">
                      <div className="d-flex justify-content-left flex-wrap">
                        <span className="badge bg-success mt-3">
                          Followers: {data.followers}
                        </span>
                        <span className="badge bg-warning ms-3 mt-3">
                          Following: {data.following}
                        </span>
                        <span className="badge bg-primary ms-3 mt-3">
                          Public Repos: {data.public_repos}
                        </span>
                        <span className="badge bg-info ms-3 mt-3">
                          Public Gists: {data.public_gists}
                        </span>
                      </div>
                      <div className="skill-share-inner ">
                        <ul className="text-left content mt-4 mb-2 p-0">
                          <li>Company: {data.company}</li>
                          <li>
                            Twitter:
                            <a
                              className="text-decoration-none color-dark "
                              href={`http://www.twitter.com/${data?.twitter_username}`}
                            >
                              {data.twitter_username}
                            </a>
                          </li>
                          <li>
                            Website:
                            <a
                              className="text-decoration-none color-dark"
                              href={`http://${data.blog}`}
                            >
                              {data.blog}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End skiull area -->/ */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
