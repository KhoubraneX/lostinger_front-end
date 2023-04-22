import Pagination from "./pagination";
import { ItemCardGrid } from "./itemCard";
import CardPreLoader from "./cardPreLoader";

export default function ListingGrid({ items }) {

  return (
    <>
      <div className="col-lg-9 sm-margin-50px-bottom">
        {!items && <CardPreLoader mode="grid"/>}
        <div className="row margin-40px-bottom">
          {items && items.map((item) => <ItemCardGrid key={item._idItem} item={item}/>)}
        </div>
        {items && <Pagination />}
      </div>
    </>
  )
}