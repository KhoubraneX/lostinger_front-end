import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <section className="text-center">
        <div className="container">
          <div className=" width-55 sm-width-100 center-col">
            <div className="row page-container">
              <div className="col-12">
                <h1 className="title text-theme-color">404</h1>
                <h2 className="font-size40 xs-font-size22 margin-40px-bottom xs-margin-20px-bottom">
                  Page not found
                </h2>
                <Link to="/" className="butn mr-2 my-1 my-sm-0">
                  Back to Home
                </Link>
                <Link to="/contact" className="butn my-1 my-sm-0">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="row margin-30px-top sm-margin-25px-top">
              <div className="col-12">
                © 2020 Finder <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
