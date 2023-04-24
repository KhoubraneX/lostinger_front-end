import { useItemDtContext } from "../../utils/contexts/ItemDetailsContext"

export default function FilterDropDown({sortOrder ,handleSortChange, handleSearchByPlace , handleSearchByStatus, searchValueByPlace , searchValueByStatus}) {
    let ItemDt = useItemDtContext()

    return (
        <>
            <div className="col-lg-3 col-md-6 sm-margin-20px-bottom">
                <span className="text-extra-dark-gray font-weight-600">
                    Sort By
                </span>
                <select value={sortOrder} onChange={handleSortChange} className="form-control" id="exampleFormControlSelect1">
                    <option value={"default"}>Default</option>
                    <option value="asc">Date Ascending</option>
                    <option value="desc">Date Descending</option>
                </select>
            </div>
            <div className="col-lg-3 col-md-6 sm-margin-20px-bottom">
                <span className="text-extra-dark-gray font-weight-600">
                    Place
                </span>
                <select onChange={handleSearchByPlace} value={searchValueByPlace.value} className="form-control" id="exampleFormControlSelect2">
                    <option value={""}>Default</option>
                    {ItemDt && ItemDt.item_place.map((place) => <option key={place._idPlace} value={place.nameType}>{place.namePlace}</option>)}
                </select>
            </div>
            <div className="col-lg-3 col-md-6 xs-margin-20px-bottom">
                <span className="text-extra-dark-gray font-weight-600">
                    Status
                </span>
                <select onChange={handleSearchByStatus} value={searchValueByStatus.value} className="form-control" id="exampleFormControlSelect3">
                    <option value={""}>Default</option>
                    {ItemDt && ItemDt.item_type.map((type) => <option key={type._idType} value={type.nameType}>{type.nameType}</option>)}
                </select>
            </div>
        </>
    )
}