import { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PreLoaderMain } from "../components/preLoaderPage";
import PageTitleSection from "../components/pageTitleSection";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { ItemCardGrid } from "../components/itemCard";

export default function ListingDetails() {
  const [itemDetails, setItemDetails] = useState(null);
  const [itemSimilar, setItemSimilar] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  let fetchSimilarItem = async (idItem, categorie) => {
    let dataSend = {
      "_idItem": idItem,
      "nameCategorie": categorie
    }
    try {
      let { data } = await axios.post("/space/api/items?target=similarItem", JSON.stringify(dataSend))
      setItemSimilar(data);
    } catch (error) {
      console.log(error);
    }
  }


  // get item details
  useLayoutEffect(() => {
    let isMounted = true;
    let controller = new AbortController();

    let fetchItems = async () => {
      try {
        let { data } = await axios.get(`/space/api/items/${id}`);
        if (isMounted) {
          setItemDetails(data);
          await fetchSimilarItem(data["_idItem"], data["nameCategorie"])
        }
      } catch ({ response }) {
        if (response.status === 404) {
          navigate("/notFound");
        }
      }
    };

    fetchItems();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  let {
    nameCategorie,
    nameType,
    namePlace,
    nameItem,
    description,
    location,
    img,
    creatAt,
    date,
    brand,
    email,
    phone,
    name
  } = itemDetails ?? "";
  return (
    <>
      {itemDetails === null && <PreLoaderMain />}
      <PageTitleSection hrefText="Listing Details" />
      {itemDetails !== null && (
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 margin-50px-bottom">
                <div className="listing-detail margin-50px-bottom sm-margin-35px-bottom">
                  <h3 className="font-weight-500">{nameItem}</h3>
                  <div>
                    <ul className="bg-light-gray padding-20px-tb padding-30px-lr rounded">
                      <li>
                        <a href="#!">
                          <i className="fas fa-map-marked-alt margin-10px-right text-theme-color"></i>
                          {location}
                        </a>
                      </li>
                      {phone && <li>
                        <a href="#!">
                          <i className="fa fa-phone margin-10px-right text-theme-color" />{" "}
                          {phone}
                        </a>
                      </li>}
                      {email && <li>
                        <a href="#!">
                          <i className="fa fa-envelope margin-10px-right text-theme-color" />{" "}
                          {email}
                        </a>
                      </li>}
                      <li>
                        <a href="#!">
                          <i className="fa fa-solid fa-user margin-10px-right text-theme-color"></i>
                          {name}
                        </a>
                      </li>

                    </ul>
                  </div>
                </div>
                {img && <div className="margin-50px-bottom sm-margin-35px-bottom">
                  <h5 className="font-size20 border-bottom padding-20px-bottom">
                    Gallery
                  </h5>
                  <div className="owl-carousel owl-theme listing owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-item cloned"
                        style={{ width: "730px" }}
                      >
                        <div>
                          <img src={img} alt="img" />
                        </div>
                      </div>

                    </div>
                    <div className="owl-nav disabled">
                      <div className="owl-prev">prev</div>
                      <div className="owl-next">next</div>
                    </div>
                    <div className="owl-dots">
                      <div className="owl-dot active">
                        <span />
                      </div>
                    </div>
                  </div>
                </div>}
                <div className="margin-50px-bottom sm-margin-35px-bottom">
                  <h5 className="font-size20 border-bottom padding-20px-bottom">
                    Description
                  </h5>
                  <p>{description}</p>
                </div>
                <div className="margin-50px-bottom sm-margin-35px-bottom">
                  <h5 className="font-size20 border-bottom padding-20px-bottom">
                    More info
                  </h5>
                  <ul className="contact-info mt-4 mb-0 row">
                    <li className="col-sm">
                      <i className="fa fa-calendar-plus"></i> {creatAt}
                    </li>
                    <li className="col-sm">
                      <i className="far fa-calendar" /> {date}
                    </li>
                    <li className="col-sm">
                      <i className="fas fa-trademark" /> {brand}
                    </li>
                    <li className="col-sm">
                      <i className="fas fa-map-pin" /> {namePlace}
                    </li>
                  </ul>
                </div>
                <div className="margin-50px-bottom sm-margin-35px-bottom">
                  <h5 className="font-size20 border-bottom padding-20px-bottom">
                    Tags
                  </h5>
                  <ul className="tags margin-30px-bottom">
                    <li>
                      <a href="#">{nameCategorie}</a>
                    </li>
                    <li>
                      <a href="#">{namePlace}</a>
                    </li>
                    <li>
                      <a href="#">{brand}</a>
                    </li>
                    <li className="xs-margin-10px-top">
                      <a href="#">{location}</a>
                    </li>
                  </ul>
                </div>
                <div className="margin-50px-bottom sm-margin-35px-bottom">
                  <h5 className="font-size20 border-bottom padding-20px-bottom">
                    Location
                  </h5>
                  <iframe
                    title="map"
                    className="contact-map"
                    id="gmap_canvas"
                    src={`https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                  />
                </div>
                <div className="comment-form">
                  <div className="title-g margin-30px-bottom">
                    <h3>Send Message</h3>
                  </div>
                  <form action="#!" id="comment-form" method="post">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            required="required"
                          />
                        </div>
                        <div className="col-md-6 form-group">
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 form-group">
                          <textarea
                            id="form_message"
                            name="message"
                            placeholder="Message"
                            rows={4}
                            required="required"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="butn">
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="side-bar">
                  <div className="widget">
                    <div className="widget-title">
                      <h3>Contact the founder</h3>
                    </div>
                    <form method="post" action="#!">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="name"
                            id="res_name"
                            className="form-controllar border-radius-4"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="email"
                            name="email"
                            id="res_email"
                            className="form-controllar border-radius-4"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <input
                            type="text"
                            name="number"
                            id="res_phone"
                            className="form-controllar border-radius-4"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-md-12">
                          <button className="butn">send message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {itemSimilar && <div className="widget">
                    <div className="widget-title">
                      <h3>Item similar</h3>
                    </div>
                    <div className="listing-grid owl-carousel owl-theme owl-loaded owl-drag">
                    <ItemCardGrid item={itemSimilar} className="margin-30px-bottom"/>
                    </div>
                  </div>}
                  <div className="widget">
                    <div className="widget-title">
                      <h3>Information</h3>
                      <ul className="contact-info mt-4 mb-0">
                        {phone && <li>
                          <i className="fa fa-phone" /> {phone}
                        </li>}
                        {email && <li>
                          <i className="fa fa-envelope" /> {email}
                        </li>}
                        <li>
                          <i className="fas fa-map-marked-alt text-theme-color"></i> {location}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
