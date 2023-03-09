import PageTitleSection from "../components/pageTitleSection"

export default function HowItWorks() {
    return (
        <>
        <PageTitleSection hrefText="How It Works" />
        <section>
        <div className="container">
          <div className="row align-items-center margin-80px-bottom xs-margin-40px-bottom">
            <div className="col-md-5 xs-margin-20px-bottom">
              <div>
                <img className="border-radius-4" src={require("../assets/img/content/process-1.jpg")} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="padding-40px-left sm-no-padding-left">
                <span className="font-size16 text-dark-gray">Step 1</span>
                <h4 className="font-size38 sm-font-size34 xs-font-size32 sm-margin-15px-bottom margin-20px-top sm-margin-5px-top">Report a lost or found item</h4>
                <p className="margin-30px-bottom sm-margin-20px-bottom">
                  If you have lost or found an item, the first step is to create a report on our website. Simply provide the details of the item such as date, location, description, and a picture if possible.
                </p>
                <div><a href="#!" className="arrow"><span><i className="fas fa-arrow-right" /></span></a></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center margin-80px-bottom xs-margin-40px-bottom">
            <div className="col-md-7 order-2 order-md-1 order-lg-1">
              <div className="padding-40px-right sm-no-padding-right">
                <span className="font-size16 text-dark-gray">Step 2</span>
                <h4 className="font-size38 sm-font-size34 xs-font-size32 sm-margin-15px-bottom margin-20px-top sm-margin-5px-top">Search for matching reports</h4>
                <p className="margin-30px-bottom sm-margin-20px-bottom">
                  Our system will then search for matching reports of lost or found items based on the information you provided. If there is a match, you will receive an email notification.
                </p>
                <div><a href="#!" className="arrow"><span><i className="fas fa-arrow-right" /></span></a></div>
              </div>
            </div>
            <div className="col-md-5 order-1 order-md-2 order-lg-2 xs-margin-20px-bottom">
              <div>
                <div className="text-right xs-text-center"><img className="border-radius-4" src={require("../assets/img/content/process-2.jpg")} alt="" /></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-5 xs-margin-20px-bottom">
              <div>
                <img className="border-radius-4" src={require("../assets/img/content/process-3.jpg")} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="padding-40px-left sm-no-padding-left">
                <span className="font-size16 text-dark-gray">Step 3</span>
                <h4 className="font-size38 sm-font-size34 xs-font-size32 sm-margin-15px-bottom margin-20px-top sm-margin-5px-top">Contact the owner</h4>
                <p className="margin-30px-bottom sm-margin-20px-bottom">
                  If you have found an item, you can contact the owner through our secure platform to arrange for the item to be returned. If you have lost an item, you can reach out to the person who found it and provide additional information to confirm it's yours.
                </p>
                <div><a href="#!" className="arrow"><span><i className="fas fa-arrow-right" /></span></a></div>
              </div>
            </div>
          </div>
        </div>
      </section></>
    )
}