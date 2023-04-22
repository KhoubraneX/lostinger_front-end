import CardPreLoader from './cardPreLoader'
import { ItemCardRight } from './itemCard'
import Pagination from './pagination'

export default function ListingRight({items}) {
    return (
        <>
        <div className="col-lg-9 sm-margin-50px-bottom">
        {!items && <CardPreLoader mode="right" />}
        {items && items.map((item) => <ItemCardRight key={item._idItem} item={item}/>)}
      <Pagination />
</div>
        </>
    )
}