import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/contexts/UserContext";
import { logout } from "../utils/logout";

export default function Header() {

  let user = useUserContext()

  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const [submenuIsOpen, setSubmenuIsOpen] = useState(false);


  let handelOpenmenu = () => {
    setmenuIsOpen(!menuIsOpen)
  }

  let handelOpensubmenu = () => {
    setSubmenuIsOpen(!submenuIsOpen)
  }

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
                    <div className={`navbar-toggler ${menuIsOpen ? "menu-opened" : ""}`} onClick={handelOpenmenu} />
                    {/* start menu area */}
                    <ul className={`navbar-nav ml-auto ${menuIsOpen ? "open" : ""}`} id="nav">
                      <li className={`has-sub ${submenuIsOpen ? "active" : ""}`}>
                        <span className={`submenu-button ${submenuIsOpen ? "submenu-opened" : ""}`} onClick={handelOpensubmenu} />
                        <Link>Pages</Link>
                        <ul className={`${submenuIsOpen ? "open" : ""}`}>
                          <li>
                            <Link to="how-it-works">How It Works</Link>
                          </li>
                        </ul>
                      </li>
                      <li >
                        <Link to="/listing">Listing</Link>
                      </li>
                      <li>
                        <Link to="Blog">Blog</Link>
                      </li>
                      {!user && <li>
                        <Link to="registration">Register</Link>
                      </li>}
                      {!user && <li>
                        <Link to="login">Login</Link>
                      </li>}
                    </ul>
                    {/* end menu area */}
                    {/* start attribute navigation */}
                    <div className="attr-nav sm-no-margin sm-margin-65px-right xs-margin-55px-right ml-auto">
                      {user && <ul className="search">
                        <li className="dropdown user-dropdown">
                          <Link
                            to="/dashboard/my-profile"
                            className="dropdown-toggle d-flex align-items-center"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <img style={{height: "28px"}}
                              src={require("../assets/img/avatars/profile.jpg")}
                              alt=""
                              className="rounded-circle"
                            />
                            <p className="m-0 ml-2">{user.name}</p>
                          </Link>
                          <ul className="dropdown-menu show">
                            <li>
                              <Link to="/dashboard/my-profile">Profile</Link>
                            </li>
                            <li>
                              <Link to="/dashboard/my-listing">my listing</Link>
                            </li>
                            <li>
                              <Link to="/dashboard/message">
                                <span className="badge float-right badge-danger">42</span>Messages
                              </Link>
                            </li>
                            <li role="separator" className="divider" />
                            <li>
                              <Link to="" onClick={logout}>Log Out</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>}
                      <ul className="top-nav-area">
                        <li className="dropdown sm-no-margin-right">
                          <Link
                            to={user ? "addListing" : "login"}
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
