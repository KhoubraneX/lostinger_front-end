import TextAnimation from "../components/textAnimation";
import { PopularSearchs, Search } from "../components/search";
import ItemsNear from "../components/itemNear";
import UserIpProvider from "../utils/contexts/userIpAdrees";
import Places from "../components/places";
import SectionTitle from "../components/sectionTitle";
import { Link } from "react-router-dom";
import { ItemDtProvider } from "../utils/contexts/ItemDetailsContext";
import BlogCard from "../components/blogCard";
import CardPreLoader from "../components/cardPreLoader";
import { useLayoutEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper";

export default function Home() {
  const [blogs, setBlogs] = useState(null)

  useLayoutEffect(() => {
    let isMounted = true
    let controller = new AbortController()

    let fetchItems = async () => {
      try {
        let { data } = await axios.get("/space/api/blogs");
        if (isMounted) {
          setBlogs(data)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems()
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

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
            <SectionTitle title="Where Did You Lose Your item" subTitle="choose where you lost your items" />
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
              <Link to="/add-listing" className="butn white" href="/add-listing.html"><span className="alt-font">Add Lost / found item</span></Link>
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
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">When contacting the person who posted a lost item, be respectful and polite. Remember that they are trying to help reunite the item with its rightful owner.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Be respectful</h4>
              </div></SwiperSlide>
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">When posting a lost item, make sure to provide a detailed description, including the date, location, and a clear image if possible. This will make it easier for others to identify the item.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Provide a detailed description</h4>
              </div></SwiperSlide>
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray"> If you have found an item, consider reporting it on the website to help reunite it with its rightful owner.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Report found items</h4>
              </div></SwiperSlide>
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">Check the website regularly for updates on lost items that match your description, especially in the first few days after you have lost the item.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Check regularly</h4>
              </div></SwiperSlide>
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">Keep an eye out for lost items in your community and help spread the word by sharing the website with others. The more people are aware of the website, the higher the chances of reuniting lost items with their owners.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Stay vigilant</h4>
              </div></SwiperSlide>
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">For security reasons, it is recommended to match the ID card provided by the person who posted or claimed the lost or found item. This will help prevent scams and ensure that the item is returned to its rightful owner.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Verify identity</h4>
              </div></SwiperSlide>
      <SwiperSlide><div className="testmonial-single margin-10px-top text-center">
                <p className="line-height-40 xs-line-height-35 width-65 md-width-70 sm-width-90 xs-width-100 center-col font-size22 xs-font-size18 position-relative text-extra-dark-gray">When a lost item is found or returned to its owner, make sure to update the status on the website to help others who may be searching for the same item. This will also help improve the accuracy and usefulness of the website for the community.</p>
                <h4 className="padding-35px-top xs-padding-20px-top font-size16 no-margin-bottom">Update the status</h4>
              </div></SwiperSlide>
    </Swiper>
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
              {!blogs && <CardPreLoader Length={3} mode="grid" className="col-lg-4 col-md-6 col-sm-12 margin-30px-bottom" />}
              {blogs && blogs.length !== 0 ? blogs.slice(0 , 3).map(({ _idBlog, img, title, description, likeCounte }) => (
                <BlogCard key={_idBlog} _idBlog={_idBlog} img={img} title={title} description={description} likeCounte={likeCounte} />
              )) : <div className="w-100 text-center">
                <h4>No results found</h4>
              </div>}
              {/* end blog */}
            </div>
          </div>
        </section>
        {/* end blog section */}
      </div>
    </>
  )
}