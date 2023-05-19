import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { checkToken } from '../../utils/authServices';
import { useItemDtContext } from '../../utils/contexts/ItemDetailsContext';
import Spinner from '../../components/spinner';
import Gallery from '../../components/multi-steps-from/Gallery';
import Button from '../../components/ui-components/button';
import showToastMessage from '../../utils/toast';
import Input from '../../components/ui-components/input';


const EditBlog = () => {

  const [isLoad, setIsLoad] = useState(false)
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const Navigate = useNavigate()

  let [galleryData, setGalleryData] = useState({ dataImg: { value: null } })

  const [title, setTitle] = useState({ value: "", valid: false, errorMsg: "" });
  const [description, setDescription] = useState({ value: "", valid: false, errorMsg: "" });


  // get item details
  useEffect(() => {
    let isMounted = true;
    let controller = new AbortController();

    let fetchItems = async () => {
      try {
        let { data } = await axios.get(`http://localhost/space/api/blogs/${id}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`
          },
        });
        if (isMounted) {
          setItem(data);
          title.value = data.title;
          description.value = data.description;
          galleryData.dataImg.value = { data_url: data.img }
        }
      } catch ({ response }) {
        if (response.status === 404) {
          Navigate("/notFound");
        }
      }
    };

    fetchItems();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const handleTitleChange = (e) => {
    setTitle((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const handleDescriptionChange = (e) => {
    setDescription((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const handelPublish_Submit = () => {
    if (title.value.trim() === "" || description.value === "") return
    checkToken(localStorage.jwt)
    setIsLoad(true)

    const data = {
      title: title.value,
      description: description.value
    };

    if (galleryData.dataImg.value != null && galleryData.dataImg.value != undefined && galleryData.dataImg.value != "") {
      if (galleryData.dataImg.value?.data_url !== item.img) {
        data.img = galleryData.dataImg.value["data_url"]
      }
    }

    axios.patch(`/space/api/blogs/${id}`, data , {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(({data}) => {
        // Handle success response 
        setIsLoad(false)
        showToastMessage("success" , "updated successfully")
        Navigate(`/dashboard/my-blog`)
      })
      .catch((error) => {
        // Handle error response
        setIsLoad(false)
        showToastMessage("error" , "something wrong")
      });
  };


  return (
    <>
      <div className="page-inner">
        <div className="page-title">
          <h3 className="breadcrumb-header">Blog</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="../index-2.html">Finder</a>
              </li>
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
              Edit Blog
              </li>
            </ol>
          </nav>
        </div>
        {/* start page main wrapper */}
        <div id="main-wrapper">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-white">
                <div className="card-heading clearfix border-bottom mb-4">
                  <h4 className="card-title">Basic Information</h4>
                </div>
                <div className="card-body">
                  <div className="form-row">
                    <div className="col-12 form-group ">
                      <Input state={title} onHandelChange={handleTitleChange} label="Title" className="form-control" name="Title" type="text" />
                    </div>
                    <div className="col-12 form-group ">
                      <label className='bolder' >description</label>
                      <textarea className="form-control" value={description.value} onChange={handleDescriptionChange} id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-white">
                <div className="card-heading clearfix border-bottom mb-4">
                  <h4 className="card-title">File browser</h4>
                </div>
                <div className="card-body position-relative" style={{ minHeight: "184px" }}>
                  <Gallery {...{ galleryData, setGalleryData }} />
                </div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mb-4 display-flex justify-content-end">
            <Button handelClick={handelPublish_Submit} type="submit" className="butn md-padding-15px-lr" text={!isLoad ? "update" : <Spinner />}></Button>
          </div>
        </div>
        {/* end page main wrapper */}
      </div>
    </>
  )
}

export default EditBlog








