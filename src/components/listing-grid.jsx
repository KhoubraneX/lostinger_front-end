import Pagination from "./pagination";
import { ItemCardGrid } from "./itemCard";
import CardPreLoader from "./cardPreLoader";

export default function ListingGrid({ items }) {

  return (
    <>
      <div className="col-lg-9 sm-margin-50px-bottom">
        {items === null && <CardPreLoader mode="grid" />}
        <div className="row margin-40px-bottom">
          {items && items.map((item) => <ItemCardGrid key={item._idItem} item={item} />)}
          {items && items.length === 0 && <div className="w-100 text-center">
            <h4>No results found</h4>
          </div>}
        </div>
        {items && items.length !== 0 && <Pagination />}
      </div>
    </>
  )
}