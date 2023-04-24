import { useItemDtContext } from "../../utils/contexts/ItemDetailsContext";
import Input from "../ui-components/input";

export default function FilterSearch({searchValueByCategory, handleSearchByCategory, onHandleSearchByName , onHandleSearchByLocation , searchValueByLocation , searchValueByName}) {
  let ItemDt = useItemDtContext()

    return (
        <>
        <div className="widget">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <form >
                    <div className="form-group">
                      <Input className="form-control padding-10px-tb" state={searchValueByName} type="text" placeholder="What are you looking for?" onHandelChange={onHandleSearchByName}  />
                    </div>
                    <div className="form-group">
                      <Input className="form-control padding-10px-tb" state={searchValueByLocation} type="text" placeholder="Location" onHandelChange={onHandleSearchByLocation}  />
                    </div>
                    <div className="form-group">
                      <select
                      value={searchValueByCategory.value}
                      onChange={handleSearchByCategory}
                        className="form-control padding-10px-tb"
                        id="exampleFormControlSelect6"
                      >
                        <option value="">All Categories</option>
                        {ItemDt && ItemDt.item_category.map((category) => <option key={category._idCategory} value={category.nameCategorie}>{category.nameCategorie}</option>)}
                      </select>
                    </div>
                  </form>
                </div>
        </>
    )
}