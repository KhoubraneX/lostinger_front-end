import { useLayoutEffect, useState } from "react";
import PageTitleSection from "../components/pageTitleSection";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import { PreLoaderMain } from "../components/preLoaderPage";

export default function BlogDetails() {
  const [blogDetails, setBlogDetails] = useState(null);
  const [blogsSimilar, setBlogsSimilar] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  let fetchSimilarBlogs = async (idBlog) => {
    let dataSend = {
      "_idBlog": idBlog
    }
    try {
      let { data } = await axios.post("/space/api/blogs?target=similarBlogs", JSON.stringify(dataSend))
      setBlogsSimilar(data);
      console.log(data);
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
        let { data } = await axios.get(`/space/api/blogs/${id}`);
        if (isMounted) {
          setBlogDetails(data);
          await fetchSimilarBlogs(data["_idBlog"])
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
    _idBlog , img , title , description , likeCounte
  } = blogDetails ?? "";
  return (
    <>
    {blogDetails === null && <PreLoaderMain />}
      <PageTitleSection hrefText="Blog Details" />
      {blogDetails !== null && <section className="blogs">
        <div className="container">
          <div className="row">
            {/*  start blog left*/}
            <div className="col-lg-8 col-md-12 sm-margin-50px-bottom">
              <div className="posts">
                {/*  start post*/}
                <div className="post">
                  <div className="post-img">
                    <img src={img} alt="" className="rounded" />
                  </div>
                  <div className="content">
                    <div className="blog-list-simple-text post-meta margin-20px-bottom">
                      <div className="post-title">
                        <h5>{title}</h5>
                      </div>
                    </div>
                    <div className="margin-30px-bottom">
                      <p className="margin-30px-bottom">
                        {description}
                      </p>
                    </div>
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
                {/* <div className="comments-area">
                  <div className="title-g margin-30px-bottom">
                    <h3>Comments</h3>
                  </div>
                  <div className="comment-box">
                    <div className="author-thumb">
                      <img
                        src="img/blog/01.png"
                        alt=""
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
                        alt=""
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
                        alt=""
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
                </div> */}
                {/* end comment*/}
                {/*  start form*/}
                {/* <div className="comment-form">
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
                </div> */}
                {/*  end form*/}
              </div>
            </div>
            {/*  end blog left*/}
            {/*  start blog right*/}
            <div className="col-lg-4 col-md-12 padding-30px-left sm-padding-15px-left">
              <div className="side-bar">
                <div className="widget">
                  <div className="widget-title margin-35px-bottom">
                    <h3>Recent Posts</h3>
                  </div>
                  {blogsSimilar && blogsSimilar.map(({img , _idBlog , title , createAt}) => (
                    <div key={_idBlog} className="media margin-20px-bottom">
                    <img style={{ height: "70px"}}
                      src={img}
                      className="mr-3 border-radius-4"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="no-margin-top margin-5px-bottom font-size17">
                        <Link to={`/blogDetails/${_idBlog}`} className="text-extra-dark-gray">
                          {title}
                        </Link>
                      </h5>
                      <span className="font-size14 text-theme-color">
                        {createAt}
                      </span>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
            {/*  end blog right*/}
          </div>
        </div>
      </section>}
    </>
  );
}
