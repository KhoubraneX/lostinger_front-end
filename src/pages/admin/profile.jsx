import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

  


  return (
    <><div className="page-inner">
    <div className="page-title">
      <h3 className="breadcrumb-header">My Profile</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="#">Finder</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            My Profile
          </li>
        </ol>
      </nav>
    </div>
    {/* start page main wrapper */}
    <div id="main-wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Basic Information</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 mb-4 mb-md-0">
                  <img src="../img/content/10.jpg" alt="" />
                </div>
                <div className="col-md-9">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputAddress">Your Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="Your Title"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputPhone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPhone"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <label htmlFor="exampleFormControlTextarea1">
                          Example textarea
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows={7}
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Change Password</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Current Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword3">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword3"
                    placeholder="New Password"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="exampleInputPassword2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword2"
                    placeholder="Confirm New Password"
                  />
                </div>
                <a href="#" className="btn btn-primary">
                  Change Password
                </a>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Socials</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="inputFacebook">Facebook</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputFacebook"
                    placeholder="www.facebook.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputTwitter">Twitter</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputTwitter"
                    placeholder="www.twitter.com"
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="inputWhatsapp">Whatsapp</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputWhatsapp"
                    placeholder="www.whatsapp.com"
                  />
                </div>
                <a href="#" className="btn btn-primary">
                  Send Changes
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* row */}
    </div>
    {/* end page main wrapper */}
    <div className="page-footer">
      <p>Copyright © 2023 lostisng All rights reserved.</p>
    </div>
  </div>
  </>
  )
}

export default Profile