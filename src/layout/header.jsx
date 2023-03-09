import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      {/* start header section */}
      <header>
        <div className="navbar-default">
          {/* start top search */}
          <div className="top-search bg-theme">
            <div className="container">
              <form
                className="search-form"
                action="https://finders.websitelayout.net/search.html"
                method="GET"
                acceptCharset="utf-8"
              >
                <div className="input-group">
                  <span className="input-group-addon cursor-pointer">
                    <button
                      className="search-form_submit fas fa-search font-size18 text-white"
                      type="submit"
                    />
                  </span>
                  <input
                    type="text"
                    className="search-form_input form-control"
                    name="s"
                    autoComplete="off"
                    placeholder="Type & hit enter..."
                  />
                  <span className="input-group-addon close-search">
                    <i className="fas fa-times font-size18 margin-5px-top" />
                  </span>
                </div>
              </form>
            </div>
          </div>
          {/* end top search */}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12">
                <div className="menu_area">
                  <nav className="navbar navbar-expand-lg navbar-light no-padding">
                    <div className="navbar-header navbar-header-custom">
                      {/* start logo */}
                      <Link
                        to="/"
                        className="navbar-brand width-200px sm-width-180px xs-width-150px"
                      >
                        <img
                          id="logo"
                          src={require("../assets/img/logos/logo.png")}
                          alt="logo"
                        />
                      </Link>
                      {/* end logo */}
                    </div>
                    <div className="navbar-toggler" />
                    {/* start menu area */}
                    <ul className="navbar-nav ml-auto" id="nav">
                      <li>
                        <Link>Pages</Link>
                        <ul>
                          <li>
                            <Link to="how-it-works">How It Works</Link>
                          </li>
                          <li>
                            <Link to="login">Login</Link>
                          </li>
                          <li>
                            <Link to="registration">Register</Link>
                          </li>
                        </ul>
                      </li>
                      
                      <li className="has-sub">
                        <span className="submenu-button" />
                        <span className="submenu-button" />
                        <Link to="/listing">Listing</Link>
                      </li>
                      <li>
                        <Link to="Blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                    {/* end menu area */}
                    {/* start attribute navigation */}
                    <div className="attr-nav sm-no-margin sm-margin-65px-right xs-margin-55px-right ml-auto">
                      <ul className="search">
                        <li className="search">
                          <Link to="/listing">
                            <i className="fas fa-search text-theme-color font-size18 margin-15px-top sm-no-margin-top" />
                          </Link>
                        </li>
                      </ul>
                      <ul className="top-nav-area">
                        <li className="dropdown sm-no-margin-right">
                          <Link
                            to="addListing"
                            className="butn listi md-padding-15px-lr sm-no-padding"
                          >
                            <i className="fas fa-plus-circle font-size22 margin-5px-right sm-no-margin-right vertical-align-middle" />{" "}
                            <span className="vertical-align-middle sm-display-none">
                              Add Listing
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* end attribute navigation */}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end header section */}
    </>
  );
}
