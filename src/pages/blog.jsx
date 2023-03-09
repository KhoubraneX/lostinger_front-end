import PageTitleSection from "../components/pageTitleSection";
import Pagination from "../components/pagination";

export default function Blog() {
  return (
    <>
      <PageTitleSection hrefText="Blog" />
      <section>
        <div className="container">
          <div className="row">
            {/* start blog */}
            <div className="col-lg-4 col-md-6 col-sm-12 margin-30px-bottom">
              <div className="card border-0 shadow h-100">
                <a href="#">
                  <img
                    className="card-img-top rounded"
                    src="img/blog/blog-1.jpg"
                    alt
                  />
                </a>
                <div className="card-body padding-30px-all">
                  <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                    <a
                      href="blog-details.html"
                      className="text-extra-dark-gray"
                    >
                      Think about your passions
                    </a>
                  </h5>
                  <div className="margin-10px-bottom">
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-user margin-5px-right" />
                        Amdin
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        27
                      </a>
                    </span>
                    <span>
                      <a href="#" className="font-size12 text-extra-dark-gray">
                        <i className="ti-heart margin-5px-right" />
                        12
                      </a>
                    </span>
                  </div>
                  <p className="no-margin-bottom">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            {/* end blog */}
            {/* start blog */}
            <div className="col-lg-4 col-md-6 col-sm-12 margin-30px-bottom">
              <div className="card border-0 shadow h-100">
                <a href="blog-details.html">
                  <img
                    className="card-img-top rounded"
                    src="img/blog/blog-2.jpg"
                    alt
                  />
                </a>
                <div className="card-body padding-30px-all">
                  <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                    <a
                      href="blog-details.html"
                      className="text-extra-dark-gray"
                    >
                      Find things you don't know
                    </a>
                  </h5>
                  <div className="margin-10px-bottom">
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-user margin-5px-right" />
                        Amdin
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        16
                      </a>
                    </span>
                    <span>
                      <a href="#" className="font-size12 text-extra-dark-gray">
                        <i className="ti-heart margin-5px-right" />5
                      </a>
                    </span>
                  </div>
                  <p className="no-margin-bottom">
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece.
                  </p>
                </div>
              </div>
            </div>
            {/* end blog */}
            {/* start blog */}
            <div className="col-lg-4 col-md-6 col-sm-12 margin-30px-bottom">
              <div className="card border-0 shadow h-100">
                <a href="blog-details.html">
                  <img
                    className="card-img-top rounded"
                    src="img/blog/blog-3.jpg"
                    alt
                  />
                </a>
                <div className="card-body padding-30px-all">
                  <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                    <a
                      href="blog-details.html"
                      className="text-extra-dark-gray"
                    >
                      Fitness for working people.
                    </a>
                  </h5>
                  <div className="margin-10px-bottom">
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-user margin-5px-right" />
                        Amdin
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        32
                      </a>
                    </span>
                    <span>
                      <a href="#" className="font-size12 text-extra-dark-gray">
                        <i className="ti-heart margin-5px-right" />
                        46
                      </a>
                    </span>
                  </div>
                  <p className="no-margin-bottom">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
            {/* end blog */}
            {/* start blog */}
            <div className="col-lg-4 col-md-6 col-sm-12 sm-margin-30px-bottom">
              <div className="card border-0 shadow h-100">
                <a href="blog-details.html">
                  <img
                    className="card-img-top rounded"
                    src="img/blog/blog-4.jpg"
                    alt
                  />
                </a>
                <div className="card-body padding-30px-all">
                  <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                    <a
                      href="blog-details.html"
                      className="text-extra-dark-gray"
                    >
                      How to guide people
                    </a>
                  </h5>
                  <div className="margin-10px-bottom">
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-user margin-5px-right" />
                        Amdin
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        32
                      </a>
                    </span>
                    <span>
                      <a href="#" className="font-size12 text-extra-dark-gray">
                        <i className="ti-heart margin-5px-right" />
                        46
                      </a>
                    </span>
                  </div>
                  <p className="no-margin-bottom">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
            {/* end blog */}
            {/* start blog */}
            <div className="col-lg-4 col-md-6 col-sm-12 xs-margin-30px-bottom">
              <div className="card border-0 shadow h-100">
                <a href="blog-details.html">
                  <img
                    className="card-img-top rounded"
                    src="img/blog/blog-5.jpg"
                    alt
                  />
                </a>
                <div className="card-body padding-30px-all">
                  <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                    <a
                      href="blog-details.html"
                      className="text-extra-dark-gray"
                    >
                      Write as a chief learner
                    </a>
                  </h5>
                  <div className="margin-10px-bottom">
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-user margin-5px-right" />
                        Amdin
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        32
                      </a>
                    </span>
                    <span>
                      <a href="#" className="font-size12 text-extra-dark-gray">
                        <i className="ti-heart margin-5px-right" />
                        46
                      </a>
                    </span>
                  </div>
                  <p className="no-margin-bottom">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
            {/* end blog */}
            {/* start blog */}
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card border-0 shadow h-100">
                <a href="blog-details.html">
                  <img
                    className="card-img-top rounded"
                    src="img/blog/blog-6.jpg"
                    alt
                  />
                </a>
                <div className="card-body padding-30px-all">
                  <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                    <a
                      href="blog-details.html"
                      className="text-extra-dark-gray"
                    >
                      My Classic Music and Me.
                    </a>
                  </h5>
                  <div className="margin-10px-bottom">
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-user margin-5px-right" />
                        Amdin
                      </a>
                    </span>
                    <span>
                      <a
                        href="#"
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        32
                      </a>
                    </span>
                    <span>
                      <a href="#" className="font-size12 text-extra-dark-gray">
                        <i className="ti-heart margin-5px-right" />
                        46
                      </a>
                    </span>
                  </div>
                  <p className="no-margin-bottom">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
            {/* end blog */}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            {/* start pager  */}
            <div className="text-center margin-60px-top sm-margin-40px-top">
                <Pagination />
            </div>
            {/* end pager */}
          </div>
        </div>
      </section>
    </>
  );
}
