import React, { useLayoutEffect, useState } from 'react'
import CardPreLoader from '../../components/cardPreLoader'
import axios from '../../api/axios'
import { checkToken } from '../../utils/authServices'
import { Link } from 'react-router-dom'
import showToastMessage from '../../utils/toast'

export const MyBlogs = () => {

  const [items, setItems] = useState(null)
  
  // fetch data
  useLayoutEffect(() => {
    let isMounted = true
    let controller = new AbortController()
    
    let fetchItems = async () => {
      try {
        let { data } = await axios.get("http://localhost/space/api/blogs" , {
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
    currentItems = currentItems.filter((e) => e._idBlog !== id)
    setItems(currentItems)
    
    let deleteItem = async () => {
      checkToken(localStorage.jwt)
      try {
        let { data } = await axios.delete(`http://localhost/space/api/blogs/${id}` , {
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
          My Blog
        </li>
      </ol>
    </nav>
  <div className="">

  <Link className="btn-gray" to="/dashboard/my-blog/add"><i className="fas fa-plus mr-2"></i>Add Blog</Link>
  </div>
  </div>
  {/* start page main wrapper */}
  <div id="main-wrapper">
    <div className="row">
      <div className="col-md-12">
        <div className="card card-white mb-5">
          <div className="card-heading clearfix border-bottom mb-4">
            <h4 className="card-title">Active Blogs</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
            {!items && <CardPreLoader Length={6} mode="right" className='margin-30px-bottom'/>}	

	
              {items && items.length != 0 ? items.map(({_idBlog , title, img  , likeCounte , createAt}) => (
                <li key={_idBlog} className="position-relative booking">
                <div className="media align-items-center">
                  <div className="mr-4">
                    <Link to={`/blog/${_idBlog}`}>
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
                      {createAt}
                    </div>
                    <h5 className="mb-1 mt-2">
                      <Link to={`/blog/${_idBlog}`} className="text-extra-dark-gray">
                        {title}
                      </Link>
                    </h5>
                    <Link to="#" className="text-primary">
                      like : {likeCounte}
                    </Link>
                  </div>
                </div>
                <div className="buttons-to-right">
                  <Link to={_idBlog} className="btn-gray">
                    <i className="far fa-edit mr-2" />
                    Edit
                  </Link>
                  <Link to="" onClick={() => onHandeldeleteItem(_idBlog)} className="btn-gray mr-2 ml-2">
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
</div>

    </>
  )
}
