import CardPreLoader from './cardPreLoader'
import { ItemCardRight } from './itemCard'
import Pagination from './pagination'

export default function ListingRight({items}) {
    return (
        <>
        <div className="col-lg-9 sm-margin-50px-bottom">
        {!items && <CardPreLoader Length={6} mode="right" className='margin-30px-bottom'/>}
        {items && items.map((item) => <ItemCardRight key={item._idItem} item={item}/>)}
        {items && items.length === 0 && <div className="w-100 text-center">
             <h4>No results found</h4>
          </div>}
        {/* {items && items.length !== 0 && <Pagination />} */}
</div>
        </>
    )
}