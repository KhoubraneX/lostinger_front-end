export default function ViewType({listingMode , mode , handelModeGrid , handelModeRight}) {
    return (
    <>
    <div className="col-lg-3 col-md-6">
                <div className="filter-by-grid-list d-flex float-right xs-float-none">
                  <span className="margin-30px-right">View As</span>
                  <div className="filter-tab-area">
                    <ul className="nav nav-tabs no-border-bottom">
                      <li>
                        <div
                          className={`modebtn margin-10px-right font-size22 ${
                            listingMode === mode.grid && "active"
                          }`}
                          onClick={handelModeGrid}
                        >
                          <i className="fa fa-th-large" />
                        </div>
                      </li>
                      <li>
                        <div
                          className={`modebtn font-size22 ${
                            listingMode === mode.right && "active"
                          }`}
                          onClick={handelModeRight}
                        >
                          <i className="fa fa-bars" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
    </>
    )
}