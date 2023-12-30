import Link from "next/link";

const Footer = () => {
  const d = new Date();
  return (
    <div className="rn-footer-area rn-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a>{/* <img src={footBG} alt="logo" /> */}</a>
              </div>
              <p className="description mt--30">
                © {d.getFullYear()}.{" "}
                <span style={{ color: "#f9004d" }}>Find Devs </span> all rights
                reserved. | Designed by{" "}
                <Link target="_blank" href="https://www.srdreamlab.com">
                  SR Dream Lab
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <>
        {/* <BackToTop
          style={{
            fontSize: 25,
            backgroundColor: "#ff014f",
            width: "5rem",
            height: "5rem",
            bottom: 30,
            right: 30,
            transform: "rotate(312deg)",
          }}
          icon={<GiArrowWings />}
        /> */}
      </>
    </div>
  );
};

export default Footer;
