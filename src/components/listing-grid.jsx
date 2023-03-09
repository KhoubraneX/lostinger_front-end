import Pagination from "./pagination";

export default function ListingGrid() {
    return (
        <>
              <div className="col-lg-9 sm-margin-50px-bottom">
        <div className="row margin-40px-bottom">
          <div className="col-md-6 margin-30px-bottom">
            <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/4.jpg" style={{"background-image":"url(\"img/content/4.jpg\")"}}>
              <div className="mt-auto position-relative z-index-9">
                <h5 className="text-white">Hotel &amp; Hostel</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white box-desc">
                  <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 502 S Huron Ave Mackinaw City</div>
                  <div className="position-relative z-index-9 text-white"> Found</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 margin-30px-bottom">
            <a href="listing-details.html" className="card box-hover bg-img cover-background border-0 p-4 h-100" data-background="img/content/5.jpg" style={{"background-image":"url(\"img/content/5.jpg\")"}}>
              <div className="mt-auto position-relative z-index-9">
                <h5 className="text-white">Coffee cafe</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white box-desc">
                  <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 502 S Huron Ave Mackinaw City</div>
                  <div className="position-relative z-index-9 text-white"> Lost</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 margin-30px-bottom">
            <a href="listing-details.html" className="card box-hover bg-img cover-background border-0 p-4 h-100" data-background="img/content/6.jpg" style={{"background-image":"url(\"img/content/6.jpg\")"}}>
              <div className="mt-auto z-index-9">
                <h5 className="text-white">Food &amp; Drinks</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white box-desc">
                  <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 502 S Huron Ave Mackinaw City</div>
                  <div className="position-relative z-index-9 text-white"> Found</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 margin-30px-bottom">
            <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/7.jpg" style={{"background-image":"url(\"img/content/7.jpg\")"}}>
              <div className="mt-auto z-index-9">
                <h5 className="text-white">Shop &amp; Stores</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white box-desc">
                  <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 502 S Huron Ave Mackinaw City</div>
                  <div className="position-relative z-index-9 text-white"> Lost</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 xs-margin-30px-bottom">
            <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/8.jpg" style={{"background-image":"url(\"img/content/8.jpg\")"}}>
              <div className="mt-auto z-index-9">
                <h5 className="text-white">Parking</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white box-desc">
                  <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 502 S Huron Ave Mackinaw City</div>
                  <div className="position-relative z-index-9 text-white"> Found</div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6">
            <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/9.jpg" style={{"background-image":"url(\"img/content/9.jpg\")"}}>
              <div className="mt-auto z-index-9">
                <h5 className="text-white">Hospital</h5>
                <hr className="border-color-light-white" />
                <div className="position-relative z-index-9 text-white box-desc">
                  <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 502 S Huron Ave Mackinaw City</div>
                  <div className="position-relative z-index-9 text-white"> Lost</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <Pagination />
      </div>
        </>
    )
}