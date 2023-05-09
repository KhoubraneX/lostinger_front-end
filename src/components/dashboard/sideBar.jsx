import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../utils/logout'

const SideBar = () => {
  return (
    <>
<>
  {/* start page sidebar */}
  <div className="page-sidebar">
    <a className="logo-box" href="index.html">
      <span>Finder</span>
    </a>
    <div className="page-sidebar-inner">
      <div className="page-sidebar-menu">
        <ul className="accordion-menu">
          <li>
            <h4 className='mb-0' >Listing</h4>
          </li>
          <li>
            <NavLink to="my-listing">
              <i className="menu-icon icon-list2" />
              <span>My Listing</span>
            </NavLink>
          </li>
          {/* <li>
            <a href="reviews.html">
              <i className="menu-icon icon-star-empty" />
              <span>Reviews</span>
            </a>
          </li>
          <li>
            <a href="bookmark.html">
              <i className="menu-icon icon-bookmarks" />
              <span>Bookmarks</span>
            </a>
          </li> */}
          <li>
            <h4 className='mb-0'>Main</h4>
          </li>
          {/* <li>
            <a href="index.html">
              <i className="menu-icon icon-home4" />
              <span>Dashboard</span>
            </a>
          </li> */}
          <li>
            <NavLink to="message">
              <i className="menu-icon icon-inbox" />
              <span>Message</span>
            </NavLink>
          </li>
          {/* <li>
            <a href="booking.html">
              <i className="menu-icon icon-book" />
              <span>Booking</span>
            </a>
          </li> */}
          {/* <li>
            <a href="wallet.html">
              <i className="menu-icon icon-newspaper" />
              <span>Wallet</span>
            </a>
          </li> */}
          <li>
            <h4 className='mb-0'>Account</h4>
          </li>
          <li>
            <NavLink to="my-profile">
              <i className="menu-icon icon-user" />
              <span>My Profile</span>
            </NavLink>
          </li>
          <li onClick={logout}>
            <Link to="#">
              <i className="menu-icon icon-lock" />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* end page sidebar */}
</>


    </>
  )
}

export default SideBar