import TextAnimation from "../components/textAnimation";
import { PopularSearchs, Search } from "../components/search";
import ItemsNear from "../components/itemNear";
import UserIpProvider from "../utils/contexts/userIpAdrees";
import Places from "../components/places";
import SectionTitle from "../components/sectionTitle";
import { Link } from "react-router-dom";
import { ItemDtProvider } from "../utils/contexts/ItemDetailsContext";

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
                <ItemDtProvider>
                  <Search />
                </ItemDtProvider>
                <PopularSearchs />
              </div>
            </div>
          </div>
          {/* end banner text */}
        </section>
        {/* end banner */}
        {/* Start featured categories Section */}
        <section>
          <div className="container">
          <SectionTitle title="Where Did You Lose Your item" subTitle="choose where you lost your items"/>
            <div className="row">
              <Places />
            </div>
          </div>
        </section>
        {/* End featured categories Section */}
        {/* start popular things section */}
        <UserIpProvider>
          <ItemsNear />
        </UserIpProvider>
        {/* end popular things section */}
        {/* start contact section */}
        <section className="bg-theme">
          <div className="container">
            <div className="text-center">
              <h3 className="text-white margin-30px-bottom font-size38 sm-font-size36 xs-font-size34">Submit Your Lost or Found Item Connect with the Community</h3>
              <Link to="/addListing"  className="butn white" href="/add-listing.html"><span className="alt-font">Add Lost / found item</span></Link>
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
                    <img className="card-img-top rounded" src={require("../assets/img/blog/blog-1.jpg")} alt="" />
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