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
              <div className="section-title text-center mb-5">
                <h2 className="title">Find Devs</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
