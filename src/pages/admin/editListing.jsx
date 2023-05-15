import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { checkToken } from '../../utils/authServices';
import { useItemDtContext } from '../../utils/contexts/ItemDetailsContext';
import Spinner from '../../components/spinner';
import LocationSteps from '../../components/multi-steps-from/locationForm';
import Gallery from '../../components/multi-steps-from/Gallery';
import Overview from '../../components/multi-steps-from/overviewFrom';
import Button from '../../components/ui-components/button';
import showToastMessage from '../../utils/toast';


const EditListing = () => {

  let itemDetails = useItemDtContext()


  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [isLoad, setIsLoad] = useState(false)
  const Navigate = useNavigate()


  let [overviewData, setOverviewData] = useState({
    itemName: { value: "", valid: true, errorMsg: "" },
    itemType: { value: "", valid: true, errorMsg: "" },
    itemCategory: { value: "", valid: true, errorMsg: "" },
    itemDate: { value: "", valid: true, errorMsg: "" },
    itemDesc: { value: "", valid: true, errorMsg: "" },
    ItemBrand: { value: "", valid: true, errorMsg: "" }
  })


  let [locationData, setLocationData] = useState({
    place: { value: "", valid: true, errorMsg: "" },
    address: { value: "", valid: true, errorMsg: "" }
  })

  let [galleryData, setGalleryData] = useState({ dataImg: { value: { data_url: "" } , valid: true } })


  // get item details
  useEffect(() => {
    let isMounted = true;
    let controller = new AbortController();

    let fetchItems = async () => {
      checkToken(localStorage.jwt);
      try {
        let { data } = await axios.get(`http://localhost/space/api/items/${id}?target=editMyItem`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem("jwt")}`
          },
        });
        if (isMounted) {
          setItem(data);
          locationData.address.value = data.location;
          overviewData.itemName.value = data.nameItem
          overviewData.itemDesc.value = data.description
          overviewData.ItemBrand.value = data.brand
          overviewData.itemDate.value = data.date
          overviewData.itemCategory.value = data._idCategory
          overviewData.itemType.value = data._idType
          locationData.place.value = data._idPlace
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

  // submit the form
  let handelPublish_Submit = (e) => {
    e.preventDefault();

    let dataForm = { ...overviewData, ...locationData, ...galleryData }

    // Check if all data is valid
    const isDataValid = Object.values(dataForm).every((field) => field.valid);

    if (!isDataValid) {
      showToastMessage('error', 'Please fill all the required fields');
      return;
    }


    let dataFromSend = {}

    for (let Prop in dataForm) {
      let { value } = dataForm[Prop];
      dataFromSend[Prop] = value
    }

    let { ItemBrand, address, dataImg, itemCategory, itemDate, itemDesc, itemName, itemType, place } = dataFromSend

    setIsLoad(true)
    checkToken(localStorage.jwt)
    let sendData = () => {
      let data = {
        "nameItem": itemName,
        "description": itemDesc,
        "location": address,
        "date": itemDate,
        "_idPlace": place,
        "_idCategory": itemCategory,
        "brand": ItemBrand,
        "_idType": itemType
      };

      
      if (dataImg != null && dataImg != undefined && dataImg != "") {
        if (dataImg?.data_url !== item.img) {
          data.img = dataImg["data_url"]
        }
      }

      let config = {
        method: 'patch',
        maxBodyLength: Infinity,
        url: `/space/api/items/${id}`,
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("jwt")
        },
        data: JSON.stringify(data)
      };

      axios.request(config)
        .then((response) => {
          setIsLoad(false)
          setTimeout(() => {
            if (response.status === 200) {
              showToastMessage("success", response.data.message)
              Navigate(`/listing/listingDetails/${response.data.id}`)
            } else if (response.status === 204) {
              showToastMessage("info", "No changes made")
            }
          }, 100)
        })
        .catch(({ response }) => {
          setIsLoad(false)
          showToastMessage("error", response.data.message)
        });

    }
    sendData()
  }


  return (
    <>
      <div className="page-inner">
        <div className="page-title">
          <h3 className="breadcrumb-header">Listing</h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="../index-2.html">Finder</a>
              </li>
              <li className="breadcrumb-item">
                <a href="index.html">Dashboard</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Listings
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
                <div className="card-body position-relative" style={{ minHeight: "184px" }}>
                  {item && itemDetails ? <Overview {...{ overviewData, setOverviewData }} /> : <Spinner className='text-dark position-absolute' style={{ left: "50%", top: "50%" }} />}
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-white">
                <div className="card-heading clearfix border-bottom mb-4">
                  <h4 className="card-title">Location</h4>
                </div>
                <div className="card-body position-relative" style={{ minHeight: "184px" }}>
                  {item && itemDetails ? <LocationSteps {...{ locationData, setLocationData }} /> : <Spinner className='text-dark position-absolute' style={{ left: "50%", top: "50%" }} />}
                </div>
              </div>
              <div className="card card-white">
                <div className="card-heading clearfix border-bottom mb-4">
                  <h4 className="card-title">File browser</h4>
                </div>
                <div className="card-body position-relative" style={{ minHeight: "184px" }}>
                  {item ? <Gallery {...{ galleryData, setGalleryData }} /> : <Spinner className='text-dark position-absolute' style={{ left: "50%", top: "50%" }} />}
                </div>
              </div>
            </div>
          </div>
          {/* Row */}
          <div className="mb-4 display-flex justify-content-end">
            <Button handelClick={handelPublish_Submit} type="submit" className="butn md-padding-15px-lr" text={!isLoad ? "Update" : <Spinner />}></Button>
          </div>
        </div>
        {/* end page main wrapper */}
      </div>
    </>
  )
}

export default EditListing