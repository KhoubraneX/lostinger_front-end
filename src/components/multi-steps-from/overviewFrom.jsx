import Input from "../input";

export default function Overview({overviewData , setOverviewData}) {

    let handelChange = ({ target }) => {
        //
        let {value , name} = target
        let currentData = {...overviewData}
        currentData[name].value = value
        
        let testCheck;
        switch (name) {
            case "itemName":
                validateInput(/^.{1,20}$/, value , name , "Please enter a valid name between 1 and 10 characters long");
                break;
            case "ItemBrand":
                validateInput(/^.{1,20}$/, value , name , "Please enter a valid brand between 1 and 10 characters long");
                break;
            case "itemDesc":
                validateInput(/^.{1,255}$/, value , name , "Please enter a valid description between 1 and 255 characters long");
                break;
            case "itemDate":
                let inputDateObj = new Date(value);
                testCheck = inputDateObj.getTime() <= Date.now()
                currentData[name].valid = testCheck
                currentData[name].errorMsg = testCheck ? "" : "date must be less than or equal to the current date"
                break;
                
                default:
                    testCheck = value === "" ? false : true
                    currentData[name].valid = testCheck
                    currentData[name].errorMsg = testCheck ? "" : "this field is required"
                    break;
        }

        setOverviewData(currentData)
    }

    let validateInput = (pattern , value , name , message) => {
        let currentData = {...overviewData}
        let testCheck = pattern.test(value.trim());

        currentData[name].valid = testCheck
        currentData[name].errorMsg = testCheck ? "" : message
    }

    let {itemName , itemType , itemCategory , itemDate , itemDesc , ItemBrand} = overviewData
    
    return (
        <>
        <form className="overview-section row">
            <div className="form-group col-md-12">
                <Input labelname="Item Name" InputData={itemName} onhandelChange={handelChange} nameInput="itemName" typeInput="text" placeholder="Dog, Jacket, Smartphone, Wallet, etc."/>
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Type</label>
            <select onChange={handelChange} value={itemType.value} className="form-control valid" name="itemType" id="exampleFormControlSelect1" aria-invalid="false">
                <option value="found">found</option>
                <option value="lost">Lost</option>
            </select>
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Category</label>
            <select onChange={handelChange} value={itemCategory.value} className="form-control valid" name="itemCategory" id="exampleFormControlSelect1" aria-invalid="false">
                <option value="Wallet">Wallet</option>
                <option value="Watch">Watch</option>
            </select>
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Date {itemType.value}</label>
                <Input InputData={itemDate} onhandelChange={handelChange} nameInput="itemDate" typeInput="date"/>
            </div>
            <div className="form-group col-md-6">
                <Input labelname="Brand" InputData={ItemBrand} onhandelChange={handelChange} nameInput="ItemBrand" typeInput="text" placeholder="Ralph Lauren, Samsung, KitchenAid, etc."/>
            </div>
            <div className="form-group col-md-12">
                <label className="bolder">Description</label>
                <textarea onChange={handelChange} value={itemDesc.value} className={`form-control ${itemDesc.errorMsg && 'border-danger'}`} id="exampleFormControlTextarea1"  name="itemDesc" rows="5" placeholder=""></textarea>
                {itemDesc.errorMsg  && <label id="exampleInputName-error" className="error" >{itemDesc.errorMsg}</label>}
            </div>
        </form>
        </>
    )
}