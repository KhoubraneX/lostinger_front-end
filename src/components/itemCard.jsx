import { Link } from "react-router-dom"

function ItemCardGrid({ item , className = "col-md-6 margin-30px-bottom"}) {
    return (
        <div key={item._idItem} className={className}>
            <Link to={`/listing/listingDetails/${item._idItem}`} className={`card bg-img box-hover cover-background border-0 p-4 h-100 ${!item.img ? "item-img-empty" : ""}`} style={item.img ? { backgroundImage: `url(${item.img})` } : {}}>
                <div className="mt-auto z-index-9">
                    <h5 className="text-white">{item.nameItem}</h5>
                    <hr className="border-color-light-white" />
                    <div className="position-relative z-index-9 text-white box-desc">
                        <div className="position-relative z-index-9 text-white"><span className="ti-location-pin" /> {item.location}</div>
                        <div className="position-relative z-index-9 text-white">{item.nameType}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function ItemCardRight({ item }) {
    return (
        <div className="border-bottom margin-40px-bottom padding-40px-bottom xs-padding-30px-bottom">
            <div className="card card-list border-0">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-4 xs-margin-20px-bottom img-card-box">
                        <div className={`card-list-img img-card ${!item.img ? "item-img-empty" : ""}`} style={item.img ? { backgroundImage: `url(${item.img})` } : {}}>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <div className="card-body no-padding-tb">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title no-margin-bottom font-size22">
                                    <Link to={`listingDetails/${item._idItem}`} className="text-extra-dark-gray">{item.nameItem}</Link>
                                </h5>
                                <ul className="no-margin-bottom">
                                    <li><Link to={`listingDetails/${item._idItem}`}>{item.nameType}</Link></li>
                                </ul>
                            </div>
                            <span>{item.namePlace}</span>
                            <p className="margin-20px-tb sm-margin-10px-top">{item.description}</p>
                            <Link to={`listingDetails/${item._idItem}`} className="text-theme-color">More details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    ItemCardGrid,
    ItemCardRight
}