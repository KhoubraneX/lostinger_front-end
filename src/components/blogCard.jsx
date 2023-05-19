const { Link } = require("react-router-dom");

export default function BlogCard({ _idBlog, img, title, likeCounte, description }) {
    return (<>
        <div className="col-lg-4 col-md-6 col-sm-12 margin-30px-bottom">
            <div className={`card border-0 shadow h-100 `}>
                <Link to={`/blog/${_idBlog}`} className={`${!img ? "item-img-empty" : ""}`}>
                    <img
                        style={!img ? { minHeight: `200px` } : {}}
                        className={`card-img-top rounded`}
                        src={img}
                        alt=""
                    />
                </Link>
                <div className="card-body padding-30px-all">
                    <h5 className="card-title font-size22 font-weight-500 magin-20px-bottom">
                        <Link to={`/blog/${_idBlog}`}
                            className="text-extra-dark-gray"
                        >
                            {title.slice(0, 24) + "..."}
                        </Link>
                    </h5>
                    <div className="margin-10px-bottom">
                        <span>
                            <Link
                                to={``}
                                className="font-size12 margin-15px-right text-extra-dark-gray"
                            >
                                <i className="ti-user margin-5px-right" />
                                Amdin
                            </Link>
                        </span>
                        {/* <span>
                      <Link
                        to={`/details/${_idBlog}`}
                        className="font-size12 margin-15px-right text-extra-dark-gray"
                      >
                        <i className="ti-comment-alt margin-5px-right" />
                        27
                      </Link>
                    </span> */}
                        <span>
                            <Link href="#" className="font-size12 text-extra-dark-gray">
                                <i className="ti-heart margin-5px-right" />
                                {likeCounte}
                            </Link>
                        </span>
                    </div>
                    <p className="no-margin-bottom" >
                        {description.slice(0, 100) + "..."}
                    </p>
                </div>
            </div>
        </div>
    </>)
}