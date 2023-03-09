export default function Overview({overviewData , setOverviewData}) {


    let {itemName , itemType , itemCategory , itemDate , itemDesc , ItemBrand} = overviewData
    return (
        <>
        <form className="overview-section row">
            <div className="form-group col-md-12">
                <label className="bolder">Item Name</label>
                <input type="text" className={`form-control no-margin-bottom padding-10px-tb valid`} value={itemName.value} name="itemName" id="exampleInputName" placeholder="Dog, Jacket, Smartphone, Wallet, etc." aria-required="true" aria-invalid="false"/>
                {<label id="exampleInputName-error" className="error" ></label>}
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Type</label>
            <select  className="form-control valid" name="itemType" id="exampleFormControlSelect1" aria-invalid="false">
                <option value="found">found</option>
                <option value="lost">Lost</option>
            </select>
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Category</label>
            <select className="form-control valid"  name="itemCategory" id="exampleFormControlSelect1" aria-invalid="false">
                <option value="Wallet">Wallet</option>
                <option value="Watch">Watch</option>
            </select>
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Date</label>
                <input  type="date" className={`form-control no-margin-bottom padding-10px-tb `} name="itemDate" id="date" placeholder="Brand (Ralph Lauren, Samsung, KitchenAid, etc.)" />
                {<label id="exampleInputName-error" className="error" >{}</label>}
            </div>
            <div className="form-group col-md-6">
                <label className="bolder">Brand</label>
                <input type="text" className={`form-control no-margin-bottom padding-10px-tb && "border-danger"`}  name="ItemBrand" id="Brand" placeholder="Ralph Lauren, Samsung, KitchenAid, etc." />
                {<label id="exampleInputName-error" className="error" ></label>}
            </div>
            <div className="form-group col-md-12">
                <label className="bolder">Description</label>
                <textarea  className={`form-control`} id="exampleFormControlTextarea1"  name="itemDesc" rows="5" placeholder=""></textarea>
                {<label id="exampleInputName-error" className="error" >{}</label>}
            </div>
        </form>
        </>
    )
}