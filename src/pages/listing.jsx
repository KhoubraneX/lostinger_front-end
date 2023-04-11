import { useState } from "react";
import ListingRight from "../components/lisitng-right";
import ListingGrid from "../components/listing-grid";
import PageTitleSection from "../components/pageTitleSection";
export default function Listing() {
  const mode = { grid: "grid", right: "right" };

  const [listingMode, setListingMode] = useState(mode.grid);

  function handelModeGrid() {
    setListingMode(mode.grid);
  }

  function handelModeRight() {
    setListingMode(mode.right);
  }

  return (
    <>
      <PageTitleSection hrefText="Listing" />
      <section>
        <div className="container">
          <div className="border-bottom padding-20px-bottom margin-30px-bottom">
            <div className="row align-items-end">
              <div className="col-lg-3 col-md-6 sm-margin-20px-bottom">
                <span className="text-extra-dark-gray font-weight-600">
                  Sort By
                </span>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option selected>Default</option>
                  <option value={1}>Date Ascending</option>
                  <option value={2}>Date Descending</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6 sm-margin-20px-bottom">
                <span className="text-extra-dark-gray font-weight-600">
                  Place
                </span>
                <select className="form-control" id="exampleFormControlSelect2">
                  <option selected>Default</option>
                  <option value={1}>street</option>
                  <option value={2}>Cinema</option>
                  <option value={3}>Parks / Gardens</option>
                  <option value={4}>taxi</option>
                </select>
              </div>
              <div className="col-lg-3 col-md-6 xs-margin-20px-bottom">
                <span className="text-extra-dark-gray font-weight-600">
                  Status
                </span>
                <select className="form-control" id="exampleFormControlSelect3">
                  <option selected>Default</option>
                  <option value={1}>Found</option>
                  <option value={2}>Lost</option>
                </select>
              </div>
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
            </div>
          </div>
          <div className="margin-60px-bottom">
            <span className="margin-20px-right font-size18">Brand</span>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox1"
                defaultValue="option1"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox1"
              >
                Nike
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox2"
                defaultValue="option2"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox2"
              >
                Samsung
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox3"
                defaultValue="option3"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox3"
              >
                Gucci
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox4"
                defaultValue="option4"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox4"
              >
                Louis Vuitton
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox5"
                defaultValue="option5"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox5"
              >
                Apple
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox6"
                defaultValue="option6"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox6"
              >
                Puma
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox7"
                defaultValue="option7"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox7"
              >
                fitness
              </label>
            </div>
            <div className="form-check form-check-inline margin-30px-right md-margin-15px-right">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox8"
                defaultValue="option8"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox8"
              >
                Zara
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="inlineCheckbox9"
                defaultValue="option9"
              />
              <label
                className="form-check-label text-extra-dark-gray"
                htmlFor="inlineCheckbox9"
              >
                TrackR
              </label>
            </div>
          </div>
          <div className="row">
            {/* mode lisitng */}
            {listingMode === "right" ? <ListingRight /> : <ListingGrid />}

            <div className="col-lg-3">
              <div className="side-bar">
                <div className="widget">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <form method="post" action="#!">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control padding-10px-tb"
                        id="exampleFormControlInput4"
                        placeholder="What are you looking for?"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control padding-10px-tb"
                        id="exampleFormControlInput5"
                        placeholder="Location"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        className="form-control padding-10px-tb"
                        id="exampleFormControlSelect6"
                      >
                        <option selected>All Categories</option>
                        <option value={1}>phone</option>
                        <option value={2}>laptop</option>
                        <option value={3}>card</option>
                        <option value={4}>wallet</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="widget">
                  <div className="widget-title">
                    <h3>Range Filters</h3>
                  </div>
                  <span className="irs irs--flat js-irs-0  irs-with-grid">
                    <span className="irs">
                      <span className="irs-line" tabIndex={0} />
                      <span
                        className="irs-min"
                        style={{ visibility: "visible" }}
                      >
                        $0
                      </span>
                      <span
                        className="irs-max"
                        style={{ visibility: "hidden" }}
                      >
                        $1 000
                      </span>
                      <span
                        className="irs-from"
                        style={{ visibility: "visible", left: "11.4348%" }}
                      >
                        $200
                      </span>
                      <span
                        className="irs-to"
                        style={{ visibility: "visible", left: "69.8696%" }}
                      >
                        $800
                      </span>
                      <span
                        className="irs-single"
                        style={{ visibility: "hidden", left: "30.8696%" }}
                      >
                        $200 — $800
                      </span>
                    </span>
                    <span
                      className="irs-grid"
                      style={{ width: "97.3913%", left: "1.20435%" }}
                    >
                      <span className="irs-grid-pol" style={{ left: "0%" }} />
                      <span
                        className="irs-grid-text js-grid-text-0"
                        style={{ left: "0%", "margin-left": "-2.3913%" }}
                      >
                        0
                      </span>
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "20%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "15%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "10%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "5%" }}
                      />
                      <span className="irs-grid-pol" style={{ left: "25%" }} />
                      <span
                        className="irs-grid-text js-grid-text-1"
                        style={{
                          left: "25%",
                          visibility: "visible",
                          "margin-left": "-4.56522%",
                        }}
                      >
                        250
                      </span>
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "45%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "40%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "35%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "30%" }}
                      />
                      <span className="irs-grid-pol" style={{ left: "50%" }} />
                      <span
                        className="irs-grid-text js-grid-text-2"
                        style={{
                          left: "50%",
                          visibility: "visible",
                          "margin-left": "-4.56522%",
                        }}
                      >
                        500
                      </span>
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "70%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "65%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "60%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "55%" }}
                      />
                      <span className="irs-grid-pol" style={{ left: "75%" }} />
                      <span
                        className="irs-grid-text js-grid-text-3"
                        style={{
                          left: "75%",
                          visibility: "visible",
                          "margin-left": "-4.56522%",
                        }}
                      >
                        750
                      </span>
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "95%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "90%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "85%" }}
                      />
                      <span
                        className="irs-grid-pol small"
                        style={{ left: "80%" }}
                      />
                      <span className="irs-grid-pol" style={{ left: "100%" }} />
                      <span
                        className="irs-grid-text js-grid-text-4"
                        style={{ left: "100%", "margin-left": "-6.30435%" }}
                      >
                        1 000
                      </span>
                    </span>
                    <span
                      className="irs-bar"
                      style={{ left: "20.7826%", width: "58.4348%" }}
                    />
                    <span
                      className="irs-shadow shadow-from"
                      style={{ display: "none" }}
                    />
                    <span
                      className="irs-shadow shadow-to"
                      style={{ display: "none" }}
                    />
                    <span
                      className="irs-handle from"
                      style={{ left: "19.4783%" }}
                    >
                      <i />
                      <i />
                      <i />
                    </span>
                    <span
                      className="irs-handle to type_last"
                      style={{ left: "77.913%" }}
                    >
                      <i />
                      <i />
                      <i />
                    </span>
                  </span>
                  <div className="price-range irs-hidden-input" tabIndex={-1} />
                </div>
                <div className="widget">
                  <div className="widget-title">
                    <h3>More Filters</h3>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Elevator in building
                    </label>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Friendly workspace
                    </label>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck3"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck3">
                      Instant Book
                    </label>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck4"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck4">
                      Wireless Internet
                    </label>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck5"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck5">
                      Free parking on premises
                    </label>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck6"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck6">
                      Free parking on street
                    </label>
                  </div>
                  <div className="form-check margin-5px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck7"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck7">
                      Smoking allowed
                    </label>
                  </div>
                  <div className="form-check margin-20px-bottom">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck8"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck8">
                      Events
                    </label>
                  </div>
                  <a href="#" className="butn">
                    Update
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
