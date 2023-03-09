import PageTitleSection from "../components/pageTitleSection";

export default function ListingDetails() {
    return (
        <>
        <PageTitleSection hrefText="Listing Details" />
        <section>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 margin-50px-bottom">
        <div className="listing-detail margin-50px-bottom sm-margin-35px-bottom">
          <h3 className="font-weight-500">Grand Heritage Hotel</h3>
          <div>
            <ul className="bg-light-gray padding-20px-tb padding-30px-lr rounded">
              <li><a href="#!"><i className="fas fa-map-marked-alt margin-10px-right text-theme-color" />345 Canal St, New York, USA</a>
              </li>
              <li><a href="#!"><i className="fa fa-phone margin-10px-right text-theme-color" /> 0123-456-789</a></li>
              <li><a href="#!"><i className="fa fa-envelope margin-10px-right text-theme-color" /> maroine619@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="margin-50px-bottom sm-margin-35px-bottom">
          <h5 className="font-size20 border-bottom padding-20px-bottom">Description</h5>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
        </div>
        <div className="margin-50px-bottom sm-margin-35px-bottom">
          <h5 className="font-size20 border-bottom padding-20px-bottom">More info</h5>
          <ul className="contact-info mt-4 mb-0 row">
            <li className="col-sm">
              <i className="fa fa-regular fa-clock" /> 11:20 AM
            </li>
            <li className="col-sm">
              <i className="far fa-calendar" /> 12-20-2022
            </li>
            <li className="col-sm">
              <i className="fas fa-trademark" /> Nike
            </li>
            <li className="col-sm">
              <i className="fas fa-map-pin" /> Taxi
            </li>
          </ul>
        </div>
        <div className="margin-50px-bottom sm-margin-35px-bottom">
          <h5 className="font-size20 border-bottom padding-20px-bottom">Gallery</h5>
          <div className="owl-carousel owl-theme listing owl-loaded owl-drag">
            <div className="owl-stage-outer"><div className="owl-stage" style={{"-webkit-transform":"translate3d(-2190px, 0px, 0px)","-ms-transform":"translate3d(-2190px, 0px, 0px)","transform":"translate3d(-2190px, 0px, 0px)","-webkit-transition":"all 0.5s ease 0s","transition":"all 0.5s ease 0s","width":"4380px"}}><div className="owl-item cloned" style={{"width":"730px"}}><div>
                    <img src="img/content/01.jpg" alt />
                  </div></div><div className="owl-item cloned" style={{"width":"730px"}}><div>
                    <img src="img/content/2.jpg" alt />
                  </div></div><div className="owl-item" style={{"width":"730px"}}><div>
                    <img src="img/content/01.jpg" alt />
                  </div></div><div className="owl-item active" style={{"width":"730px"}}><div>
                    <img src="img/content/2.jpg" alt />
                  </div></div><div className="owl-item cloned" style={{"width":"730px"}}><div>
                    <img src="img/content/01.jpg" alt />
                  </div></div><div className="owl-item cloned" style={{"width":"730px"}}><div>
                    <img src="img/content/2.jpg" alt />
                  </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots"><div className="owl-dot"><span /></div><div className="owl-dot active"><span /></div></div></div>
        </div>
        <div className="margin-50px-bottom sm-margin-35px-bottom">
          <h5 className="font-size20 border-bottom padding-20px-bottom">Tags</h5>
          <ul className="tags margin-30px-bottom">
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li className="xs-margin-10px-top">
              <a href="#">Tourism</a>
            </li>
            <li className="xs-margin-10px-top">
              <a href="#">Trending</a>
            </li>
            <li className="xs-margin-10px-top">
              <a href="#">Travel</a>
            </li>
          </ul>
        </div>
        <div className="margin-50px-bottom sm-margin-35px-bottom">
          <h5 className="font-size20 border-bottom padding-20px-bottom">Location</h5>
          <iframe className="contact-map" id="gmap_canvas" src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" marginHeight={0} marginWidth={0} />
        </div>
        <div className="comment-form">
          <div className="title-g margin-30px-bottom">
            <h3>Send Message</h3>
          </div>
          <form action="#!" id="comment-form" method="post">
            <div className="controls">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
                </div>
                <div className="col-md-6 form-group">
                  <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <textarea id="form_message" name="message" placeholder="Message" rows={4} required="required" defaultValue={""} />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="butn"><span>Send Message</span></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="side-bar">
          <div className="widget">
            <div className="widget-title"><h3>Contact the founder</h3></div>
            <form method="post" action="#!">
              <div className="row">
                <div className="form-group col-md-12">
                  <input type="text" name="name" id="res_name" className="form-controllar border-radius-4" placeholder="Full Name" />
                </div>
                <div className="form-group col-md-12">
                  <input type="email" name="email" id="res_email" className="form-controllar border-radius-4" placeholder="Email" />
                </div>
                <div className="form-group col-md-12">
                  <input type="text" name="number" id="res_phone" className="form-controllar border-radius-4" placeholder="Phone Number" />
                </div>
                <div className="col-md-12">
                  <button className="butn">send message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="widget">
            <div className="widget-title"><h3>Items similar</h3></div>
            <div className="d-flex justify-content-between margin-15px-bottom">
              <span className="text-extra-dark-gray">Items :</span>
              <span>7</span>
            </div>
            <div className="listing-grid owl-carousel owl-theme owl-loaded owl-drag">
              <div className="owl-stage-outer"><div className="owl-stage" style={{"-webkit-transform":"translate3d(-1005px, 0px, 0px)","-ms-transform":"translate3d(-1005px, 0px, 0px)","transform":"translate3d(-1005px, 0px, 0px)","-webkit-transition":"all 1s ease 0s","transition":"all 1s ease 0s","width":"2010px"}}><div className="owl-item cloned" style={{"width":"325px","margin-right":"10px"}}><a href="listing-details.html" className="card bg-img box-hover transition-none cover-background border-0 p-4 h-100" data-background="img/content/4.jpg" style={{"background-image":"url(\"img/content/4.jpg\")"}}>
                      <div className="mt-auto position-relative z-index-9">
                        <h5 className="text-white">Hotel &amp; Hostel</h5>
                        <hr className="border-color-light-white" />
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin text-primary" /> 6 Locations</div>
                      </div>
                    </a></div><div className="owl-item cloned" style={{"width":"325px","margin-right":"10px"}}><a href="listing-details.html" className="card box-hover transition-none bg-img cover-background border-0 p-4 h-100" data-background="img/content/6.jpg" style={{"background-image":"url(\"img/content/6.jpg\")"}}>
                      <div className="mt-auto z-index-9">
                        <h5 className="text-white">Food &amp; Drinks</h5>
                        <hr className="border-color-light-white" />
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin text-primary" /> 8 Locations</div>
                      </div>
                    </a></div><div className="owl-item" style={{"width":"325px","margin-right":"10px"}}><a href="listing-details.html" className="card bg-img box-hover transition-none cover-background border-0 p-4 h-100" data-background="img/content/4.jpg" style={{"background-image":"url(\"img/content/4.jpg\")"}}>
                      <div className="mt-auto position-relative z-index-9">
                        <h5 className="text-white">Hotel &amp; Hostel</h5>
                        <hr className="border-color-light-white" />
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin text-primary" /> 6 Locations</div>
                      </div>
                    </a></div><div className="owl-item active" style={{"width":"325px","margin-right":"10px"}}><a href="listing-details.html" className="card box-hover transition-none bg-img cover-background border-0 p-4 h-100" data-background="img/content/6.jpg" style={{"background-image":"url(\"img/content/6.jpg\")"}}>
                      <div className="mt-auto z-index-9">
                        <h5 className="text-white">Food &amp; Drinks</h5>
                        <hr className="border-color-light-white" />
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin text-primary" /> 8 Locations</div>
                      </div>
                    </a></div><div className="owl-item cloned" style={{"width":"325px","margin-right":"10px"}}><a href="listing-details.html" className="card bg-img box-hover transition-none cover-background border-0 p-4 h-100" data-background="img/content/4.jpg" style={{"background-image":"url(\"img/content/4.jpg\")"}}>
                      <div className="mt-auto position-relative z-index-9">
                        <h5 className="text-white">Hotel &amp; Hostel</h5>
                        <hr className="border-color-light-white" />
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin text-primary" /> 6 Locations</div>
                      </div>
                    </a></div><div className="owl-item cloned" style={{"width":"325px","margin-right":"10px"}}><a href="listing-details.html" className="card box-hover transition-none bg-img cover-background border-0 p-4 h-100" data-background="img/content/6.jpg" style={{"background-image":"url(\"img/content/6.jpg\")"}}>
                      <div className="mt-auto z-index-9">
                        <h5 className="text-white">Food &amp; Drinks</h5>
                        <hr className="border-color-light-white" />
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin text-primary" /> 8 Locations</div>
                      </div>
                    </a></div></div></div><div className="owl-nav disabled"><div className="owl-prev">prev</div><div className="owl-next">next</div></div><div className="owl-dots disabled" /></div>
          </div>
          <div className="widget">
            <div className="widget-title"><h3>Price Range</h3></div>
            <div>
              <span className="irs irs--flat js-irs-0  irs-with-grid"><span className="irs"><span className="irs-line" tabIndex={0} /><span className="irs-min" style={{"visibility":"visible"}}>$0</span><span className="irs-max" style={{"visibility":"visible"}}>$1 000</span><span className="irs-from" style={{"visibility":"visible","left":"13.9385%"}}>$200</span><span className="irs-to" style={{"visibility":"visible","left":"72.8308%"}}>$800</span><span className="irs-single" style={{"visibility":"hidden","left":"36.4615%"}}>$200 — $800</span></span><span className="irs-grid" style={{"width":"98.1538%","left":"0.823077%"}}><span className="irs-grid-pol" style={{"left":"0%"}} /><span className="irs-grid-text js-grid-text-0" style={{"left":"0%","margin-left":"-1.69231%"}}>0</span><span className="irs-grid-pol small" style={{"left":"20%"}} /><span className="irs-grid-pol small" style={{"left":"15%"}} /><span className="irs-grid-pol small" style={{"left":"10%"}} /><span className="irs-grid-pol small" style={{"left":"5%"}} /><span className="irs-grid-pol" style={{"left":"25%"}} /><span className="irs-grid-text js-grid-text-1" style={{"left":"25%","visibility":"visible","margin-left":"-3.23077%"}}>250</span><span className="irs-grid-pol small" style={{"left":"45%"}} /><span className="irs-grid-pol small" style={{"left":"40%"}} /><span className="irs-grid-pol small" style={{"left":"35%"}} /><span className="irs-grid-pol small" style={{"left":"30%"}} /><span className="irs-grid-pol" style={{"left":"50%"}} /><span className="irs-grid-text js-grid-text-2" style={{"left":"50%","visibility":"visible","margin-left":"-3.23077%"}}>500</span><span className="irs-grid-pol small" style={{"left":"70%"}} /><span className="irs-grid-pol small" style={{"left":"65%"}} /><span className="irs-grid-pol small" style={{"left":"60%"}} /><span className="irs-grid-pol small" style={{"left":"55%"}} /><span className="irs-grid-pol" style={{"left":"75%"}} /><span className="irs-grid-text js-grid-text-3" style={{"left":"75%","visibility":"visible","margin-left":"-3.23077%"}}>750</span><span className="irs-grid-pol small" style={{"left":"95%"}} /><span className="irs-grid-pol small" style={{"left":"90%"}} /><span className="irs-grid-pol small" style={{"left":"85%"}} /><span className="irs-grid-pol small" style={{"left":"80%"}} /><span className="irs-grid-pol" style={{"left":"100%"}} /><span className="irs-grid-text js-grid-text-4" style={{"left":"100%","margin-left":"-4.46154%"}}>1 000</span></span><span className="irs-bar" style={{"left":"20.5538%","width":"58.8923%"}} /><span className="irs-shadow shadow-from" style={{"display":"none"}} /><span className="irs-shadow shadow-to" style={{"display":"none"}} /><span className="irs-handle from" style={{"left":"19.6308%"}}><i /><i /><i /></span><span className="irs-handle to type_last" style={{"left":"78.5231%"}}><i /><i /><i /></span></span><div className="price-range irs-hidden-input" tabIndex={-1} />
            </div>
          </div>
          <div className="widget">
            <div className="widget-title"><h3>Information</h3>
              <ul className="contact-info mt-4 mb-0">
                <li>
                  <i className="fa fa-phone" /> 123-456-7890
                </li>
                <li>
                  <i className="fa fa-envelope" /> example@yourname.com
                </li>
                <li>
                  <i className="fa fa-map-marker-alt" /> 74 Guild Street 542B, London
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></section>
        </>
    )
}