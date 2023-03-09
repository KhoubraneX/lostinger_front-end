export default function Footer() {
    return (
        <>
      <footer>
        <div className="footer-area padding-90px-tb md-padding-70px-tb sm-padding-50px-tb">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6 sm-margin-40px-bottom">
                <img src="img/logos/logo.png" className="width-50 margin-30px-bottom xs-margin-20px-bottom" alt="" />
                <p>Our goal is to reunite lost items with their rightful owners through the power of community. Our website provides a platform for people to report lost or found items and connect with each other to facilitate the reunion process. Join us in our mission to make a difference and bring lost items back home.</p>
              </div>
              <div className="col-lg-3 col-sm-6 sm-margin-40px-bottom">
                <h3 className="footer-title-style1">Info</h3>
                <ul className="list-style-1 no-margin">
                  <li>
                    <span className="d-inline-block vertical-align-top font-size18"><i className="ti-location-pin text-theme-color" /></span>
                    <span className="d-inline-block width-65 sm-width-85 vertical-align-top padding-10px-left">74 Guild Street 542B, Great North Town MT.</span>
                  </li>
                  <li>
                    <span className="d-inline-block vertical-align-top font-size18"><i className="ti-mobile text-theme-color" /></span>
                    <span className="d-inline-block width-65 sm-width-85 vertical-align-top padding-10px-left">4355 6567 789</span>
                  </li>
                  <li>
                    <span className="d-inline-block vertical-align-top font-size18"><i className="ti-email text-theme-color" /></span>
                    <span className="d-inline-block width-65 sm-width-85 vertical-align-top padding-10px-left">example@yourname.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-sm-6 mobile-margin-40px-bottom">
                <h3 className="footer-title-style1">Useful Links</h3>
                <ul className="list-style-1 no-margin-bottom">
                  <li><a href="index-2.html">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="admin/index.html">Dashboard</a></li>
                  <li><a href="blog-grid.html">Blog</a></li>
                  <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-sm-6">
                <h3 className="footer-title-style1">Contact</h3>
                <p className="margin-20px-bottom">We're here to help! If you have questions or need assistance, please reach out to us. Our team is available to assist you with any concerns or issues you may encounter. Fill out our contact form or send us an email and we'll get back to you as soon as possible.</p>
                <div className="email-box  wow fadeInUp" data-wow-delay=".3s" style={{visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp'}}>
                  <div className="input">
                    <input type="email" placeholder="Enter your email" />
                    <a href="" className="butn"><span><i className="far fa-paper-plane" /></span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bar xs-padding-15px-tb">
          <div className="container">
            <div className="float-right xs-width-100 text-center xs-margin-5px-bottom">
              <ul className="social-icon-style no-margin">
                <li>
                  <a href=""><i className="fab fa-facebook-f" /></a>
                </li>
                <li>
                  <a href=""><i className="fab fa-twitter" /></a>
                </li>
                <li>
                  <a href=""><i className="fab fa-instagram" /></a>
                </li>
                <li>
                  <a href=""><i className="fab fa-linkedin-in" /></a>
                </li>
              </ul>
            </div>
            <div className="float-left xs-width-100 text-center">
              <p className="text-medium-gray font-weight-600 margin-5px-top xs-no-margin-top">© 2020 Finder is Powered by Chitrakoot Web</p>
            </div>
          </div>
        </div>
      </footer>
        </>
)
}