import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import LocationSearchInput from "./map";
import { useItemDtContext } from "../utils/contexts/ItemDetailsContext";


function Search() {
    const queryParams = new URLSearchParams();

    let dtData = useItemDtContext()

    let Navigate = useNavigate()
    const [searchName, setSearchName] = useState("")
    const [searchLocation, setSearchLocation] = useState("")
    const [searchCategory, setSearchCategory] = useState("")


    const handleNameChange = ({ target }) => {
        setSearchName(target.value)
    }

    const handleLocationChange = (value) => {
        setSearchLocation(value)
    }

    const handleCategoryChange = ({ target }) => {
        setSearchCategory(target.value)
    }

    const handelFormSearch = (event) => {
        event.preventDefault()
        if (searchName) {
            queryParams.append('name', searchName);
        }
        if (searchLocation) {
            queryParams.append('location', searchLocation);
        }
        if (searchCategory) {
            queryParams.append('category', searchCategory);
        }

        Navigate(`/listing?${queryParams.toString()}`);
    }

    return (
        <div className="bg-white-opacity padding-10px-tb margin-40px-top xs-margin-30px-top padding-15px-lr xs-padding-20px-all border-radius-4">
            <form onSubmit={handelFormSearch}>
                <div className="form-row align-items-center">
                    <div className="col-md-4 my-1">
                        <input type="text" value={searchName} onChange={handleNameChange} className="form-control" id="inlineFormInputName" placeholder="What item you lost?" />
                    </div>
                    <div className="col-md-3 my-1">
                        <LocationSearchInput placeholder='Search By Places' value={searchLocation} handleLocationChange={handleLocationChange} />
                    </div>
                    <div className="col-md-3 my-1">
                        <select value={searchCategory} onChange={handleCategoryChange} className="form-control" id="exampleFormControlSelect2">
                            <option value="">All Category</option>
                            {dtData && dtData.item_category.map(({ nameCategorie, _idCategory }) => (
                                <option key={_idCategory} value={nameCategorie}>{nameCategorie}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-2 my-1">
                        <button type="submit" className="butn btn-block">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function PopularSearchs() {


    let Navigate = useNavigate()

    function handelClick(value) {
        Navigate(`/listing?name=${value}`)
    }

    return (
        <div className="margin-40px-top xs-margin-30px-top">
            <span className="margin-10px-right text-white xs-display-block xs-margin-10px-bottom">Popular Searchs</span>
            <div className="searchs display-inline-block">
                <ul className="no-margin-bottom">
                    <li onClick={() => handelClick("Wallet")} ><Link to="#" className="text-white">Wallet</Link></li>
                    <li onClick={() => handelClick("Accessories")}><Link to="#" className="text-white">Accessories</Link></li>
                    <li onClick={() => handelClick("cat")}><Link to="#" className="text-white">cat</Link></li>
                    <li onClick={() => handelClick("phone")}><Link to="#" className="text-white">phone</Link></li>
                </ul>
            </div>
        </div>
    )
}


export { Search, PopularSearchs }
