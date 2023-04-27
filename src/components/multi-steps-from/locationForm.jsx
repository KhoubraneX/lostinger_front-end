import { useItemDtContext } from "../../utils/contexts/ItemDetailsContext"
import LocationSearchInput from "../map";
export default function LocationSteps({locationData , setLocationData}) {

    // get dataForm from Context
    let itemDetails = useItemDtContext()

    let handelChange = ({ target }) => {
        let {value , name} = target
        let currentData = {...locationData}
        
        currentData[name].value = value

        switch (name) {
                default:
                    let testCheck = value === "" ? false : true
                    currentData[name].valid = testCheck
                    currentData[name].errorMsg = testCheck ? "" : "this field is required"
                    break;
        }

        setLocationData(currentData)
    }

    let handelChangeLocation = (value) => {
        let currentData = {...locationData}
        
        currentData["address"].value = value

        switch ("address") {
                default:
                    let testCheck = value === "" ? false : true
                    currentData["address"].valid = testCheck
                    currentData["address"].errorMsg = testCheck ? "" : "this field is required"
                    break;
        }

        setLocationData(currentData)
    }

    let {place , address } = locationData
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

            <div className="form-group col-md-8">
                <label className="bolder">location</label>
                <LocationSearchInput value={address.value} handleLocationChange={handelChangeLocation}/>
                {address.errorMsg  && <label className="error" >{address.errorMsg}</label>}
            </div>
            <div className="col form-group">
                <div className="padding-15px-all shadow bg-white">
                    <iframe
                        title="map"
                        className="contact-map"
                        id="gmap_canvas"
                        src={`https://maps.google.com/maps?q=${address.value}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    />
                </div>
            </div>
        </div>
        </>
    );
}
