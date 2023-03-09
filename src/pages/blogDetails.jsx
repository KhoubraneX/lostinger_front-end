import PageTitleSection from "../components/pageTitleSection";

export default function BlogDetails() {
  return (
    <>
      <PageTitleSection hrefText="Blog Details" />
      <section className="blogs">
        <div className="container">
          <div className="row">
            {/*  start blog left*/}
            <div className="col-lg-8 col-md-12 sm-margin-50px-bottom">
              <div className="posts">
                {/*  start post*/}
                <div className="post">
                  <div className="post-img">
                    <img src="img/blog/blog-7.jpg" alt className="rounded" />
                  </div>
                  <div className="content">
                    <div className="blog-list-simple-text post-meta margin-20px-bottom">
                      <div className="post-title">
                        <h5>The best food in new york</h5>
                      </div>
                    </div>
                    <div className="margin-30px-bottom">
                      <p className="margin-30px-bottom">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text.
                      </p>
                      <p className="font-size20 xs-font-size18 margin-30px-bottom line-height-30 text-theme-color padding-40px-left xs-padding-20px-left">
                        "It is a long established fact that a reader will be
                        distracted by the readable content."
                      </p>
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page editors.
                      </p>
                    </div>
                    <div className="row margin-30px-bottom">
                      <div className="col-6">
                        <img
                          src="img/blog/blog-11.jpg"
                          className="rounded"
                          alt
                        />
                      </div>
                      <div className="col-6">
                        <img
                          src="img/blog/blog-12.jpg"
                          className="rounded"
                          alt
                        />
                      </div>
                    </div>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="share-post">
                      <span>Share Post</span>
                      <ul>
                        <li>
                          <a href=";">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  start post*/}
                {/* start pager  */}
                <div className="text-center margin-30px-bottom">
                  <div className="pagination text-small text-uppercase text-extra-dark-gray">
                    <ul>
                      <li className="active">
                        <a href=";">Prev</a>
                      </li>
                      <li>
                        <a href="#!">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* end pager */}
                {/*  start comment*/}
                <div className="comments-area">
                  <div className="title-g margin-30px-bottom">
                    <h3>Comments</h3>
                  </div>
                  <div className="comment-box">
                    <div className="author-thumb">
                      <img
                        src="img/blog/01.png"
                        alt
                        className="rounded-circle width-85 xs-width-100"
                      />
                    </div>
                    <div className="comment-info">
                      <h6>
                        <a href=";">Alex Joyrina</a>
                      </h6>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <div className="reply">
                        <a href=";">
                          <i className="fa fa-reply" aria-hidden="true" /> Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box">
                    <div className="author-thumb">
                      <img
                        src="img/blog/02.png"
                        alt
                        className="rounded-circle width-85 xs-width-100"
                      />
                    </div>
                    <div className="comment-info">
                      <h6>
                        <a href=";">Jama Karleny</a>
                      </h6>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <div className="reply">
                        <a href=";">
                          <i className="fa fa-reply" aria-hidden="true" /> Reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box">
                    <div className="author-thumb">
                      <img
                        src="img/blog/03.png"
                        alt
                        className="rounded-circle width-85 xs-width-100"
                      />
                    </div>
                    <div className="comment-info">
                      <h6>
                        <a href=";">Ivonne Drennen</a>
                      </h6>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <div className="reply">
                        <a href=";">
                          <i className="fa fa-reply" aria-hidden="true" /> Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end comment*/}
                {/*  start form*/}
                <div className="comment-form">
                  <div className="title-g margin-30px-bottom">
                    <h3>Post a Comment</h3>
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
                {/*  end form*/}
              </div>
            </div>
            {/*  end blog left*/}
            {/*  start blog right*/}
            <div className="col-lg-4 col-md-12 padding-30px-left sm-padding-15px-left">
              <div className="side-bar">
                <div className="widget">
                  <div className="shadow">
                    <div className="padding-20px-all">
                      <h5 className="card-title font-size20 margin-5px-bottom">
                        About Us
                      </h5>
                      <p className="card-text border-bottom padding-20px-bottom">
                        It is a long established fact that a reader will be
                        distracted by the readable content.
                      </p>
                      <ul className="social-listing no-margin-bottom">
                        <li>
                          <a href=";">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href=";">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="widget">
                  <div className="widget-title margin-35px-bottom">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="media margin-20px-bottom">
                    <img
                      src="img/blog/blog-8.jpg"
                      className="mr-3 border-radius-4"
                      alt
                    />
                    <div className="media-body">
                      <h5 className="no-margin-top margin-5px-bottom font-size17">
                        <a href="#" className="text-extra-dark-gray">
                          Fitness for working people.
                        </a>
                      </h5>
                      <span className="font-size14 text-theme-color">
                        2 Jan, 2020
                      </span>
                    </div>
                  </div>
                  <div className="media margin-20px-bottom">
                    <img
                      src="img/blog/blog-9.jpg"
                      className="mr-3 border-radius-4"
                      alt
                    />
                    <div className="media-body">
                      <h5 className="no-margin-top margin-5px-bottom font-size17">
                        <a href="#" className="text-extra-dark-gray">
                          Write as a chief learner
                        </a>
                      </h5>
                      <span className="font-size14 text-theme-color">
                        12 Jan, 2020
                      </span>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      src="img/blog/blog-10.jpg"
                      className="mr-3 border-radius-4"
                      alt
                    />
                    <div className="media-body">
                      <h5 className="no-margin-top margin-5px-bottom font-size17">
                        <a href="#" className="text-extra-dark-gray">
                          How to guide people
                        </a>
                      </h5>
                      <span className="font-size14 text-theme-color">
                        17 Feb, 2020
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  end blog right*/}
          </div>
        </div>
      </section>
    </>
  );
}
