import React from 'react'

const EditListing = () => {
  return (
    <><div className="page-inner">
    <div className="page-title">
      <h3 className="breadcrumb-header">Listing</h3>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="../index-2.html">Finder</a>
          </li>
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Listings
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
              <form>
                <div className="form-row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="validationCustom">Listing Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom"
                      required=""
                      placeholder="Listing Title"
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom01">Status</label>
                    <select className="form-control mb-3" id="validationCustom01">
                      <option>For Rent</option>
                      <option>For Sale</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="validationCustom03">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      required=""
                      placeholder="USD"
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="validationCustom04">Area/Location</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom04"
                      required=""
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom05">Rooms</label>
                    <select className="form-control mb-3" id="validationCustom05">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom06">Bathroom</label>
                    <select className="form-control mb-3" id="validationCustom06">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Location</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="validationCustom07">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom07"
                      required=""
                      placeholder="Address"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom09">State</label>
                    <select className="form-control mb-3" id="validationCustom09">
                      <option>Choose State</option>
                      <option>Alabama</option>
                      <option>California</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom08">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom08"
                      required=""
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">File browser</h4>
            </div>
            <div className="card-body">
              <form className="form-inline">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose file
                  </label>
                </div>
              </form>
            </div>
          </div>
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Detailed Information</h4>
            </div>
            <div className="card-body">
              <form className="needs-validation" noValidate="">
                <div className="form-row">
                  <div className="col-md-12">
                    <label htmlFor="exampleFormControlTextarea1">Detailed</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Amenities (optional)</h4>
            </div>
            <div className="card-body">
              <form className="form-horizontal">
                <div className="form-group row">
                  <div className="col-md-3">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck1">
                        Air Conditioning
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck2"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck2">
                        Events
                      </label>
                    </div>
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck3"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck3">
                        Pet Friendly
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck4"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck4">
                        Elevator in building
                      </label>
                    </div>
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck5"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck5">
                        Free Wifi
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck6"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck6">
                        Free Parking
                      </label>
                    </div>
                    <div className="form-check mb-3 mb-md-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck7"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck7">
                        Outdoor Seating
                      </label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck8"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck8">
                        Instant Book
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="defaultCheck9"
                      />
                      <label className="form-check-label" htmlFor="defaultCheck9">
                        Pet Friendly
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card card-white">
            <div className="card-heading clearfix border-bottom mb-4">
              <h4 className="card-title">Contact Details</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="form-row">
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="validationCustom10">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom10"
                      required=""
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-4 mb-3 mb-md-0">
                    <label htmlFor="validationCustom11">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom11"
                      required=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="validationCustom12">Phone (optional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom12"
                      required=""
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Row */}
    </div>
    {/* end page main wrapper */}
    <div className="page-footer">
      <p>Copyright © 2023 lostisng All rights reserved.</p>
    </div>
  </div>
  </>
  )
}

export default EditListing