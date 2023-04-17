import Input from "./input";
import { useItemDtContext } from "../../utils/contexts/ItemDetailsContext"
import { useLayoutEffect } from "react";
export default function LocationSteps({locationData , setLocationData}) {

    // get dataForm from Context
    let itemDetails = useItemDtContext()

    let handelChange = ({ target }) => {
        let {value , name} = target
        let currentData = {...locationData}
        
        currentData[name].value = value

        switch (name) {
            case "zipCode":
                validateInput(/^\d{5}(?:[-\s]\d{4})?$/, value , name , "The ZIP code you entered is not valid");
                break;

                default:
                    let testCheck = value === "" ? false : true
                    currentData[name].valid = testCheck
                    currentData[name].errorMsg = testCheck ? "" : "this field is required"
                    break;
        }

        setLocationData(currentData)
    }

    let validateInput = (pattern , value , name , message) => {
        let currentData = {...locationData}
        let testCheck = pattern.test(value.trim());

        currentData[name].valid = testCheck
        currentData[name].errorMsg = testCheck ? "" : message
    }

    let {place , address , zipCode} = locationData
    return (
        <>
        <div className="row">
            <div className="form-group col-md-4">
                <label className="bolder">Where Found</label>
                <select
                    value={place.value}
                    onChange={handelChange}
                    className="form-control valid"
                    name="place"
                >
                {itemDetails && itemDetails.item_place.map((cat) => (
                    <option key={cat._idPlace} value={cat._idPlace}>{cat.namePlace}</option>
                ))}
                </select>
            </div>

            <div className="form-group col-md-4">
                <Input labelname="Location" InputData={address} onhandelChange={handelChange} nameInput="address" typeInput="text"/>
            </div>
            <div className="form-group col-md-4">
                <Input labelname="Zip-Code" InputData={zipCode} onhandelChange={handelChange} nameInput="zipCode" typeInput="text" placeholder="(e.g. 12345 or 12345-6789)"/>
            </div>
            <div className="col form-group">
                <div className="padding-15px-all shadow bg-white">
                    <iframe
                        title="map"
                        className="contact-map"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                </div>
            </div>
        </div>
        </>
    );
}
