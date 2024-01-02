const Header = () => {
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
                <div className="col-lg-12">
                  <div class="h-search-form text-center">
                    <form action="#">
                      <input
                        type="search"
                        name="search"
                        placeholder="Search.."
                      />
                      <button>
                        <ion-icon class="bi bi-search" name="search-outline">
                          Search
                        </ion-icon>
                      </button>
                    </form>
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
