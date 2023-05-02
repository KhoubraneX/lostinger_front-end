import { Link, useNavigate } from "react-router-dom";

export default function Places() {




    let Navigate = useNavigate()

    function handelClick(value) {
        Navigate(`/listing?place=${value}`)
    }
    return (
        <>
        <div onClick={() => handelClick("Cafes")} className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-server" />
                      </div>
                      <div>
                        <h5 className="font-size20">Cafes</h5>
                        <i className="ti-server font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Hotels")} className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-envelope" />
                      </div>
                      <div>
                        <h5 className="font-size20">Hotels</h5>
                        <i className="ti-envelope font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Gyms")} className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-line-double" />
                      </div>
                      <div>
                        <h5 className="font-size20">Gyms</h5>
                        <i className="ti-line-double font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Universities")} className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-book" />
                      </div>
                      <div>
                        <h5 className="font-size20">Educational Institute</h5>
                        <i className="ti-book font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Public Transportation (Buses, trains, and taxis)")} className="col-sm-6 col-md-4 col-lg-3 sm-margin-40px-bottom mobile-margin-25px-bottom">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-car" />
                      </div>
                      <div>
                        <h5 className="font-size20">Taxi</h5>
                        <i className="ti-car font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Libraries")} className="col-sm-6 col-md-4 col-lg-3 sm-margin-40px-bottom mobile-margin-25px-bottom">
                <Link to="/listing" href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-layout-column2" />
                      </div>
                      <div>
                        <h5 className="font-size20">Libraries</h5>
                        <i className="ti-layout-column2 font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Restaurants")} className="col-sm-6 col-md-4 col-lg-3 mobile-margin-25px-bottom">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-bell" />
                      </div>
                      <div>
                        <h5 className="font-size20">Restaurants </h5>
                        <i className="ti-bell font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div onClick={() => handelClick("Parks")} className="col-sm-6 col-md-4 col-lg-3">
                <Link href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-direction-alt" />
                      </div>
                      <div>
                        <h5 className="font-size20">Parks / Gardens</h5>
                        <i className="ti-direction-alt font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
        </>
    )
}