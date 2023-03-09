import TextAnimation from "../components/textAnimation";


export default function Home() {

    return (
        <>
        <div>
        {/* start banner */}
        <section className="bg-img screen-height home-img cover-background line-banner" data-overlay-dark={6} data-background="../assets/img/banner/Blog_art_hero_find_everything-1024x394.png">
          {/* start banner text */}
          <div className="container position-relative h-100">
            <div className="header-text display-table h-100 z-index-1 width-100">
              <div className="display-table-cell vertical-align-middle text-center">
                <p className="font-size18 xs-font-size16 text-white letter-spacing-1 margin-15px-bottom">Search for your lost items</p>
                {/* start banner headline text */}
                <TextAnimation />
                {/* end banner headline text */}
                <div className="bg-white-opacity padding-10px-tb margin-40px-top xs-margin-30px-top padding-15px-lr xs-padding-20px-all border-radius-4">
                  <form method="post" action="#!">
                    <div className="form-row align-items-center">
                      <div className="col-md-4 my-1">
                        <input type="text" className="form-control" id="inlineFormInputName" placeholder="What item you lost?" />
                      </div>
                      <div className="col-md-3 my-1">
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option selected>All cities</option>
                          <option value={1}>casablanca</option>
                          <option value={2}>rabat</option>
                          <option value={3}>kenitra</option>
                          <option value={3}>el jadida</option>
                        </select>
                      </div>
                      <div className="col-md-3 my-1">
                        <select className="form-control" id="exampleFormControlSelect2">
                          <option selected>All Category</option>
                          <option value={1}>Animals/Pets</option>
                          <option value={2}>Wallet</option>
                          <option value={3}>Watch</option>
                          <option value={4}>Jacket</option>
                          <option value={5}>Clothing</option>
                        </select>
                      </div>
                      <div className="col-md-2 my-1">
                        <button type="submit" className="butn btn-block">Search</button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="margin-40px-top xs-margin-30px-top">
                  <span className="margin-10px-right text-white xs-display-block xs-margin-10px-bottom">Popular Searchs</span>
                  <div className="searchs display-inline-block">
                    <ul className="no-margin-bottom">
                      <li><a href="#!" className="text-white">Wallet</a></li>
                      <li><a href="#!" className="text-white">Accessories</a></li>
                      <li><a href="#!" className="text-white">cat</a></li>
                      <li><a href="#!" className="text-white">phone</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end banner text */}
        </section>
        {/* end banner */}
        {/* Start featured categories Section */}
        <section>
          <div className="container">
            <div className="text-center margin-40px-bottom">
              <h3 className="margin-10px-bottom">Where Did You Lose Your item</h3>
              <p className="no-margin-bottom">choose where you lost your items</p>
            </div>
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-server" />
                      </div>
                      <div>
                        <h5 classtableName="font-size20">Cinema</h5>
                        <i className="ti-server font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
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
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-line-double" />
                      </div>
                      <div>
                        <h5 className="font-size20">street</h5>
                        <i className="ti-line-double font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 margin-40px-bottom mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
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
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 sm-margin-40px-bottom mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
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
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 sm-margin-40px-bottom mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-layout-column2" />
                      </div>
                      <div>
                        <h5 className="font-size20">Institution</h5>
                        <i className="ti-layout-column2 font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 mobile-margin-25px-bottom">
                <a href="listing-grid-full-width.html">
                  <div className="feature-inner display-table">
                    <div className="display-table-cell vertical-align-middle">
                      <div className="bg-icon">
                        <i className="ti-bell" />
                      </div>
                      <div>
                        <h5 className="font-size20">Restaurant </h5>
                        <i className="ti-bell font-size32 text-theme-color" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <a href="listing-grid-full-width.html">
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
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End featured categories Section */}
        {/* start popular things section */}
        <section className="no-padding-top">
          <div className="container">
            <div className="text-center margin-40px-bottom">
              <h3 className="margin-10px-bottom">Found items Near You</h3>
              <p className="no-margin-bottom">We found lost items Near You</p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-4 margin-30px-bottom">
                <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100">
                  <div className="mt-auto position-relative z-index-9">
                    <h5 className="text-white">phone</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                      <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 6 Km</div>
                      <div className="position-relative z-index-9 text-white"> Found</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 margin-30px-bottom">
                <a href="listing-details.html" className="card box-hover bg-img cover-background border-0 p-4 h-100" data-background="img/content/empty.png">
                  <div className="mt-auto position-relative z-index-9">
                    <h5 className="text-white">Airline Tickets</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                      <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 8 Km</div>
                      <div className="position-relative z-index-9 text-white"> Found</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 margin-30px-bottom">
                <a href="listing-details.html" className="card box-hover bg-img cover-background border-0 p-4 h-100" data-background="img/content/lost_jacket_clothing_jacket_734.jpg">
                  <div className="mt-auto z-index-9">
                    <h5 className="text-white">Jacket</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                      <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 9 Km</div>
                      <div className="position-relative z-index-9 text-white"> Found</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 sm-margin-30px-bottom">
                <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/lost_cats_animals_pets_cats_517-2.jpg">
                  <div className="mt-auto z-index-9">
                    <h5 className="text-white">Cats</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                      <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 9 Km</div>
                      <div className="position-relative z-index-9 text-white"> Found</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4 xs-margin-30px-bottom">
                <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/lost_chanel_purse_personal_accessories_chanel_purse_470-2.jpg">
                  <div className="mt-auto z-index-9">
                    <h5 className="text-white">Chanel purse</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                      <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 12 Km</div>
                      <div className="position-relative z-index-9 text-white"> Found</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a href="listing-details.html" className="card bg-img box-hover cover-background border-0 p-4 h-100" data-background="img/content/lost_african_gray_gongo_animals_pets_african_gray_gongo_428-2.jpg">
                  <div className="mt-auto z-index-9">
                    <h5 className="text-white">AFRICAN GRAY GONGO</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                      <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> 16 Km</div>
                      <div className="position-relative z-index-9 text-white"> Found</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end popular things section */}
        {/* start contact section */}
        <section className="bg-theme">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white margin-30px-bottom font-size38 sm-font-size36 xs-font-size34">Submit Your Lost or Found Item Connect with the Community</h3>
              <a className="butn white" href="/add-listing.html"><span className="alt-font">Add Lost / found item</span></a>
            </div>
          </div>
        </section>
        {/* end contact section */}
        {/* start services section */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4 xs-margin-30px-bottom">
                <div className="text-center bg-white border padding-20px-lr padding-40px-tb border-radius-4 h-100">
                  <span className="margin-20px-bottom font-size40 text-theme-color display-inline-block"><i className="ti-fullscreen" /></span>
                  <h3 className="font-size20 margin-20px-bottom sm-margin-10px-bottom">Lost It</h3>
                  <p className="center-col xs-width-95 no-margin-bottom">Rely on us, we effectively trace, track and follow lost and found items..</p>
                </div>
              </div>
              <div className="col-md-4 xs-margin-30px-bottom">
                <div className="text-center bg-white border padding-20px-lr padding-40px-tb border-radius-4 h-100">
                  <span className="margin-20px-bottom font-size40 text-theme-color display-inline-block"><i className="ti-layers" /></span>
                  <h3 className="font-size20 margin-20px-bottom sm-margin-10px-bottom">List It</h3>
                  <p className="center-col xs-width-95 no-margin-bottom">We connect you to lost and found items that fit the criteria of the item you lost or found.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center bg-white border padding-20px-lr padding-40px-tb border-radius-4 h-100">
                  <span className="margin-20px-bottom font-size40 text-theme-color display-inline-block"><i className="ti-server" /></span>
                  <h3 className="font-size20 margin-20px-bottom sm-margin-10px-bottom">Found It</h3>
                  <p className="center-col xs-width-95 no-margin-bottom">Personalized backend to monitor items that you've submitted.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end services section */}
        {/* start testimonial section */}
        <section className="no-padding">
          <div className="container">
            <div className="text-center margin-30px-bottom">
              <h3 className="margin-10px-bottom">Testimonials</h3>
            </div>
            <div className="owl-carousel owl-theme" id="testmonials-carousel">
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">When contacting the person who posted a lost item, be respectful and polite. Remember that they are trying to help reunite the item with its rightful owner.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Be respectful</h4>
              </div>
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">When posting a lost item, make sure to provide a detailed description, including the date, location, and a clear image if possible. This will make it easier for others to identify the item.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Provide a detailed description</h4>
              </div>
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray"> If you have found an item, consider reporting it on the website to help reunite it with its rightful owner.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Report found items</h4>
              </div>
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">Check the website regularly for updates on lost items that match your description, especially in the first few days after you have lost the item.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Check regularly</h4>
              </div>
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">Keep an eye out for lost items in your community and help spread the word by sharing the website with others. The more people are aware of the website, the higher the chances of reuniting lost items with their owners.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Stay vigilant</h4>
              </div>
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">For security reasons, it is recommended to match the ID card provided by the person who posted or claimed the lost or found item. This will help prevent scams and ensure that the item is returned to its rightful owner.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Verify identity</h4>
              </div>
              <div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">When a lost item is found or returned to its owner, make sure to update the status on the website to help others who may be searching for the same item. This will also help improve the accuracy and usefulness of the website for the community.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Update the status</h4>
              </div>
            </div>
          </div>
        </section>
        {/* end testimonial section */}
        {/* start blog section */}
        <section>
          <div className="container">
            <div className="text-center margin-30px-bottom">
              <h3 className="margin-10px-bottom">Our Blog</h3>
              <p className="no-margin-bottom">Stay Connected and Informed Read Our Latest Posts</p>
            </div>
            <div className="row">
              {/* start blog */}
              <div className="col-lg-4 sm-margin-30px-bottom">
                <div className="card border-0 shadow h-100">
                  <a href="#">
                    <img className="card-img-top rounded" src={require("../assets/img/blog/blog-1.jpg")}  alt="" />
                  </a>
                  <div className="card-body padding-30px-all">
                    <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                      <a href="blog-details.html" className="text-extra-dark-gray">Think about your passions</a>
                    </h5>
                    <div className="margin-10px-bottom">
                      <span><a href="#" className="font-size12 margin-15px-right text-extra-dark-gray"><i className="ti-user margin-5px-right" />Amdin</a></span>
                      <span><a href="#" className="font-size12 margin-15px-right text-extra-dark-gray"><i className="ti-comment-alt margin-5px-right" />27</a></span>
                      <span><a href="#" className="font-size12 text-extra-dark-gray"><i className="ti-heart margin-5px-right" />12</a></span>
                    </div>
                    <p className="no-margin-bottom">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                  </div>
                </div>
              </div>
              {/* end blog */}
              {/* start blog */}
              <div className="col-lg-4 sm-margin-30px-bottom">
                <div className="card border-0 shadow h-100">
                  <a href="#">
                    <img className="card-img-top rounded" src={require("../assets/img/blog/blog-2.jpg")} alt="" />
                  </a>
                  <div className="card-body padding-30px-all">
                    <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                      <a href="blog-details.html" className="text-extra-dark-gray">Find things you don't know</a>
                    </h5>
                    <div className="margin-10px-bottom">
                      <span><a href="#" className="font-size12 margin-15px-right text-extra-dark-gray"><i className="ti-user margin-5px-right" />Amdin</a></span>
                      <span><a href="#" className="font-size12 margin-15px-right text-extra-dark-gray"><i className="ti-comment-alt margin-5px-right" />16</a></span>
                      <span><a href="#" className="font-size12 text-extra-dark-gray"><i className="ti-heart margin-5px-right" />5</a></span>
                    </div>
                    <p className="no-margin-bottom">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                  </div>
                </div>
              </div>
              {/* end blog */}
              {/* start blog */}
              <div className="col-lg-4">
                <div className="card border-0 shadow h-100">
                  <a href="#">
                    <img className="card-img-top rounded" src={require("../assets/img/blog/blog-3.jpg")} alt="" />
                  </a>
                  <div className="card-body padding-30px-all">
                    <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                      <a href="blog-details.html" className="text-extra-dark-gray">Fitness for working people.</a>
                    </h5>
                    <div className="margin-10px-bottom">
                      <span><a href="#" className="font-size12 margin-15px-right text-extra-dark-gray"><i className="ti-user margin-5px-right" />Amdin</a></span>
                      <span><a href="#" className="font-size12 margin-15px-right text-extra-dark-gray"><i className="ti-comment-alt margin-5px-right" />32</a></span>
                      <span><a href="#" className="font-size12 text-extra-dark-gray"><i className="ti-heart margin-5px-right" />46</a></span>
                    </div>
                    <p className="no-margin-bottom">It is a long established fact that a reader will be distracted by the readable content.</p>
                  </div>
                </div>
              </div>
              {/* end blog */}
            </div>
          </div>
        </section>
        {/* end blog section */}
      </div>
        </>
    )
}