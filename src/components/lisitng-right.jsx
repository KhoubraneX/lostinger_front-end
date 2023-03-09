import { Link } from 'react-router-dom'
import PageTitleSection from './pageTitleSection'
import Pagination from './pagination'
export default function ListingRight() {
    return (
        <>
        <div className="col-lg-9 sm-margin-50px-bottom">
  <div className="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom">
    <div className="card card-list border-0">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-4 xs-margin-20px-bottom">
          <div className="card-list-img">
            <img className="border-radius-5" src={require("../assets/img/content/listing-1.jpg")} alt />
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="card-body no-padding-tb">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title no-margin-bottom font-size22">
                <a href="listing-details.html" className="text-extra-dark-gray">Burger House </a>
              </h5>
              <ul className="no-margin-bottom">
                <li><a href="#">Lost</a></li>
              </ul>
            </div>
            <span>London</span>
            <p className="margin-20px-tb sm-margin-10px-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt.</p>
            <a href="#" className="text-theme-color">More details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom">
    <div className="card card-list border-0">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-4 xs-margin-20px-bottom">
          <div className="card-list-img">
            <img className="border-radius-5" src="img/content/listing-2.jpg" alt />
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="card-body no-padding-tb">
            <div className="star">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title no-margin-bottom font-size22">
                <a href="listing-details.html" className="text-extra-dark-gray">Sticky Band</a>
              </h5>
              <ul className="no-margin-bottom">
                <li><a href="#"><i className="far fa-heart margin-5px-right" />2 k</a></li>
              </ul>
            </div>
            <span>Great North Town MT.</span>
            <p className="margin-20px-tb sm-margin-10px-top">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.</p>
            <a href="#" className="text-theme-color">Event</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom">
    <div className="card card-list border-0">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-4 xs-margin-20px-bottom">
          <div className="card-list-img">
            <img className="border-radius-5" src="img/content/listing-3.jpg" alt />
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="card-body no-padding-tb">
            <div className="star">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title no-margin-bottom font-size22">
                <a href="listing-details.html" className="text-extra-dark-gray">Hotel Govendor</a>
              </h5>
              <ul className="no-margin-bottom">
                <li><a href="#"><i className="far fa-heart margin-5px-right" />20 k</a></li>
              </ul>
            </div>
            <span>74 Guild Street 542B</span>
            <p className="margin-20px-tb sm-margin-10px-top">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model.</p>
            <a href="#" className="text-theme-color">Hotel</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom">
    <div className="card card-list border-0">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-4 xs-margin-20px-bottom">
          <div className="card-list-img">
            <img className="border-radius-5" src="img/content/listing-4.jpg" alt />
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="card-body no-padding-tb">
            <div className="star">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title no-margin-bottom font-size22">
                <a href="listing-details.html" className="text-extra-dark-gray">Premium Fitness Gym</a>
              </h5>
              <ul className="no-margin-bottom">
                <li><a href="#"><i className="far fa-heart margin-5px-right" />18 k</a></li>
              </ul>
            </div>
            <span>74 Guild Street 542B, London.</span>
            <p className="margin-20px-tb sm-margin-10px-top">It is a long established fact that a reader will be distracted by the readable content.</p>
            <a href="#" className="text-theme-color">Fitness / Gym</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="margin-40px-bottom">
    <div className="card card-list border-0">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-4 xs-margin-20px-bottom">
          <div className="card-list-img">
            <img className="border-radius-5" src="img/content/listing-5.jpg" alt />
          </div>
        </div>
        <div className="col-md-7 col-lg-8">
          <div className="card-body no-padding-tb">
            <div className="star">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-o" />
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title no-margin-bottom font-size22">
                <a href="listing-details.html" className="text-extra-dark-gray">Shopping Mall</a>
              </h5>
              <ul className="no-margin-bottom">
                <li><a href="#"><i className="far fa-heart margin-5px-right" />6 k</a></li>
              </ul>
            </div>
            <span>New York</span>
            <p className="margin-20px-tb sm-margin-10px-top">There are many variations of passages of Lorem Ipsum available, but the majority.</p>
            <a href="#" className="text-theme-color">Shop / store</a>
          </div>
        </div>
      </div>
    </div>
  </div>
      <Pagination />
</div>
        </>
    )
}