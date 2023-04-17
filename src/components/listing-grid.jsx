import { useEffect, useState } from "react";
import Pagination from "./pagination";
import axios from "../api/axios";
import { refreshToken } from "../utils/authServices";
import { Link } from "react-router-dom";

export default function ListingGrid() {
  
  const [items , setItems] = useState(null)

  useEffect(() => {
    let isMounted = true
    let controller = new AbortController()

    let fetchItems = async () => {
      try {
      let { data } = await axios.get("/space/api/items");
      isMounted && setItems(data);

      } catch (error) {
        refreshToken()
      }
    }
    
    fetchItems()
    return () => {
        isMounted = false
        controller.abort()
    }
  } , [])

    return (
        <>
              <div className="col-lg-9 sm-margin-50px-bottom">
        <div className="row margin-40px-bottom">
          {items && items.map((item) => (
            <div key={item._idItem} className="col-md-6 margin-30px-bottom">
            <Link to={`listingDetails/${item._idItem}`} className={`card bg-img box-hover cover-background border-0 p-4 h-100 ${item.img == null && "item-img-empty"}`}  style={item.img && {"backgroundImage":`url(data:image/jpeg;base64,${item.img})`}}>
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
          ))}
        </div>
        <Pagination />
      </div>
        </>
    )
}