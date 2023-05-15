import React, { useLayoutEffect, useRef, useState } from 'react'
import CardPreLoader from '../../components/cardPreLoader'
import axios from '../../api/axios'
import { checkToken } from '../../utils/authServices'
import { Link } from 'react-router-dom'
import showToastMessage from '../../utils/toast'

export const MyListings = () => {

  const [items, setItems] = useState(null)
  
  // fetch data
  useLayoutEffect(() => {
    let isMounted = true
    let controller = new AbortController()
    
    let fetchItems = async () => {
      checkToken(localStorage.jwt)
      try {
        let { data } = await axios.get("http://localhost/space/api/items?target=myItems" , {
          headers: { 
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`
          },
        });
        if (isMounted) {
          setItems(data)
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems()
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  let onHandeldeleteItem = (id) => {
    let currentItems = [...items]
    currentItems = currentItems.filter((e) => e._idItem !== id)
    setItems(currentItems)

    let deleteItem = async () => {
      checkToken(localStorage.jwt)
      try {
        let { data } = await axios.delete(`http://localhost/space/api/items/${id}` , {
          headers: { 
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`
          },
        });
        showToastMessage("success" , "deleted successfully")
      } catch (error) {
        showToastMessage("error" , "somthing wrong")
      }
    }
    deleteItem()
  }

  return (
    <>
    <div className="page-inner">
  <div className="page-title">
    <h3 className="breadcrumb-header">My Listings</h3>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="../index-2.html">Finder</a>
        </li>
        <li className="breadcrumb-item">
          <a href="index.html">Dashboard</a>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          My Listings
        </li>
      </ol>
    </nav>
  </div>
  {/* start page main wrapper */}
  <div id="main-wrapper">
    <div className="row">
      <div className="col-md-12">
        <div className="card card-white mb-5">
          <div className="card-heading clearfix border-bottom mb-4">
            <h4 className="card-title">Active Listings</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
            {!items && <CardPreLoader Length={6} mode="right" className='margin-30px-bottom'/>}
              {items && items.length != 0 ? items.map(({_idItem , nameType, img , creatAt , nameItem , nameCategorie}) => (
                <li key={_idItem} className="position-relative booking">
                <div className="media align-items-center">
                  <div className="mr-4">
                    <Link to={`/listing/listingDetails/${_idItem}`}>
                    <img
                    style={{height: "124px"}}
                    className="rounded"
                    src={img ? img : require("../../assets/img/content/empty.png")}
                    alt=""
                    />
                    </Link>
                  </div>
                  <div className="media-body">
                    <div className="star">
                      {nameCategorie}
                    </div>
                    <h5 className="mb-1 mt-2">
                      <Link to={`/listing/listingDetails/${_idItem}`} className="text-extra-dark-gray">
                        {nameItem}
                      </Link>
                    </h5>
                    <span className="d-block mb-4">{nameType}</span>
                    <Link to="#" className="text-primary">
                      {creatAt}
                    </Link>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <Link to={_idItem} className="btn-gray">
                    <i className="far fa-edit mr-2" />
                    Edit
                  </Link>
                  <Link to="" onClick={() => onHandeldeleteItem(_idItem)} className="btn-gray mr-2 ml-2">
                    <i className="far fa-times-circle mr-2" /> Delete
                  </Link>
                </div>
              </li>
              )) : <div className="w-100 text-center"><h4>No results found</h4></div>}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* row */}
  </div>
  {/* end page main wrapper */}
  <div className="page-footer">
    <p>Copyright © 2023 lostisng All rights reserved.</p>
  </div>
</div>

    </>
  )
}
