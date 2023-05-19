import PageTitleSection from "../components/pageTitleSection";
import showToastMessage from '../utils/toast';

export default function Conatct() {

  function handelClick() {
    showToastMessage("info" , "Thank you for submitting this. This is just a demo.")
  }
    return (
        <>
        <PageTitleSection hrefText="Contact" />
        <div>
  <section className="no-padding-bottom">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 order-2 order-lg-1">
          <div className="padding-15px-all shadow bg-white">
            <iframe className="contact-map" id="gmap_canvas" src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed" scrolling="no" marginHeight={0} marginWidth={0} />
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 sm-margin-30px-bottom">
          <div className="padding-40px-left padding-40px-top sm-no-padding">
            <h3>Find Us There</h3>
            <p className="text-extra-dark-gray font-size16 line-height-28">Having trouble with our lost and found service? Fill out the form below and our support team will assist you as soon as possible. Please provide detailed information about your issue and your contact information so we can respond effectively. We're here to help, and we appreciate your patience and understanding.</p>
            <div className="margin-30px-bottom sm-margin-20px-bottom">
              <ul className="list-style-1 no-margin">
                <li>
                  <span className="d-inline-block vertical-align-top font-size18"><i className="fas fa-map-marker-alt text-theme-color" /></span>
                  <span className="d-inline-block width-65 sm-width-85 vertical-align-top padding-10px-left">-</span>
                </li>
                <li>
                  <span className="d-inline-block vertical-align-top font-size18"><i className="fas fa-phone text-theme-color" /></span>
                  <span className="d-inline-block width-65 sm-width-85 vertical-align-top padding-10px-left">-</span>
                </li>
                <li>
                  <span className="d-inline-block vertical-align-top font-size18"><i className="fas fa-envelope text-theme-color" /></span>
                  <span className="d-inline-block width-65 sm-width-85 vertical-align-top padding-10px-left">-</span>
                </li>
              </ul>
            </div>
            <ul className="social-icon-style sm-no-margin-bottom">
              <li><a href=""><i className="fab fa-facebook-f" /></a></li>
              <li><a href=""><i className="fab fa-twitter" /></a></li>
              <li><a href=""><i className="fab fa-instagram" /></a></li>
              <li><a href=""><i className="fab fa-linkedin-in" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light-gray contact-form">
    <div className="container margin-30px-top">
      <div className="row">
        <div className="col-md-9 form-list center-col">
          <div className="row">
            <div className="form-group col-md-6">
              <input type="text" className="form-control no-margin-bottom padding-10px-tb" name="exampleInputName" id="exampleInputName" placeholder="Your Name" />
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control no-margin-bottom padding-10px-tb" name="exampleInputEmail" id="exampleInputEmail" placeholder="Email" />
            </div>
            <div className="form-group col-md-12">
              <input type="text" className="form-control no-margin-bottom padding-10px-tb" name="exampleInputTitle" id="exampleInputTitle" placeholder="Subject Title" />
            </div>
            <div className="form-group col-md-12">
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} placeholder="Message" defaultValue={""} />
            </div>
            <div className="col-md-12">
              <button onClick={handelClick} type="submit" className="butn"><span>submit message</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        </>
    )
}