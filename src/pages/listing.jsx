import { useLayoutEffect, useState } from "react";
import ListingRight from "../components/lisitng-right";
import ListingGrid from "../components/listing-grid";
import PageTitleSection from "../components/pageTitleSection";
import axios from "../api/axios";
import FilterDropDown from "../components/srearch/filter-dropDown";
import FilterBrand from "../components/srearch/filter-brand";
import FilterSearch from "../components/srearch/filter-search";
// import FilterAdditional from "../components/srearch/fillter-additional"; 
import ViewType from "../components/viewType";
import { useSearchParams } from "react-router-dom";



export default function Listing() {

  // get search data from url
  const [searchParams] = useSearchParams();
  
  const [items, setItems] = useState(null)
  // fetch data
  useLayoutEffect(() => {
    let isMounted = true
    let controller = new AbortController()
    
    let fetchItems = async () => {
      try {
        let { data } = await axios.get("/api/items");
        if (isMounted) {
          setItems(data)
          setFilteredData(data);
          // eslint-disable-next-line no-sparse-arrays
          filterData(...[searchParams.get('location') ?? "" , searchParams.get('name') ?? "" , searchParams.get('category') ?? "" , searchParams.get('place') ?? "" , , , , data])
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems()
    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  // handel type view
  const mode = { grid: "grid", right: "right" };

  const [listingMode, setListingMode] = useState(mode.grid);

  function handelModeGrid() {
    setListingMode(mode.grid);
  }

  function handelModeRight() {
    setListingMode(mode.right);
  }

  // handel search
  const [searchValueByName, setSearchValueByName] = useState({
    value: searchParams.get('name') ?? ""
  });
  const [searchValueByLocation, setSearchValueByLocation] = useState({
    value: searchParams.get('location') ?? ""
  });
  const [searchValueByCategory, setSearchValueByCategory] = useState({
    value: searchParams.get('category') ?? ""
  });
  const [searchValueByPlace, setSearchValueByPlace] = useState({
    value: searchParams.get('place') ?? ""
  });
  const [searchValueByStatus, setSearchValueByStatus] = useState({
    value:  ""
  });
  const [searchValueByBrand, setSearchValueByBrand] = useState("");

  const [filteredData, setFilteredData] = useState(items);

  function filterData(Location = searchValueByLocation.value,
    Name = searchValueByName.value,
    Category = searchValueByCategory.value,
    Place = searchValueByPlace.value,
    Status = searchValueByStatus.value,
    Brand = searchValueByBrand,
    order = sortOrder , itemsData = items) {
    let newData;
    // filtter by Location, Name, Category, Place, Status
    if (!itemsData) return;
    newData = itemsData.filter((item) =>
      item.location.toLowerCase().includes(Location.toLowerCase()) &&
      item.nameItem.toLowerCase().includes(Name.toLowerCase()) &&
      item.namePlace.toLowerCase().includes(Place.toLowerCase()) &&
      item.nameType.toLowerCase().includes(Status.toLowerCase()) &&
      item.brand.toLowerCase().includes(Brand.toLowerCase()) &&
      item.nameCategorie.toLowerCase().includes(Category.toLowerCase())
    );

    // fillter by date
    if (order === 'asc') {
      newData = [...newData].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (order === "desc") {
      newData = [...newData].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setFilteredData(newData);
  }

  const handleBrandChange = ({ target }) => {
    if (target.checked === true) {
      setSearchValueByBrand(target.value);
      
      // eslint-disable-next-line no-sparse-arrays
      filterData(...[, , , , , target.value]);
    } else {
      setSearchValueByBrand("");
      
      // eslint-disable-next-line no-sparse-arrays
      filterData(...[, , , , , ""]);
    }
  }
  // sorting order status
  const [sortOrder, setSortOrder] = useState("");
  const handleSortChange = ({ target }) => {
    setSortOrder(target.value);

    // eslint-disable-next-line no-sparse-arrays
    filterData(...[, , , , , , target.value])
  }

  function handleSearchByName({ target }) {
    setSearchValueByName({
      value: target.value
    });

    // eslint-disable-next-line no-sparse-arrays
    filterData(...[, target.value]);
  }

  function handleSearchByCategory({ target }) {
    setSearchValueByCategory({
      value: target.value
    });
    // eslint-disable-next-line no-sparse-arrays
    filterData(...[, , target.value]);
  }

  function handleSearchByPlace({ target }) {
    setSearchValueByPlace({
      value: target.value
    });
    // eslint-disable-next-line no-sparse-arrays
    filterData(...[, , , target.value]);
  }

  function handleSearchByStatus({ target }) {
    setSearchValueByStatus({
      value: target.value
    });
    // eslint-disable-next-line no-sparse-arrays
    filterData(...[, , , , target.value]);
  }

  function handleSearchByLocation(value) {
    setSearchValueByLocation({
      value: value 
    });
    filterData(value);
  }


  return (
    <>
      <PageTitleSection hrefText="Listing" />
      <section>
        <div className="container">
          <div className="border-bottom padding-20px-bottom margin-30px-bottom">
            <div className="row align-items-end">
              <FilterDropDown sortOrder={sortOrder} handleSortChange={handleSortChange} searchValueByStatus={searchValueByStatus} handleSearchByStatus={handleSearchByStatus} handleSearchByPlace={handleSearchByPlace} searchValueByPlace={searchValueByPlace} />
              <ViewType listingMode={listingMode} mode={mode} handelModeGrid={handelModeGrid} handelModeRight={handelModeRight} />
            </div>
          </div>
          <FilterBrand onHandleBrandChange={handleBrandChange} searchValueByBrand={searchValueByBrand} />
          <div className="row">
            {/* mode lisitng */}
            {listingMode === "right" ? <ListingRight items={filteredData} /> : <ListingGrid items={filteredData} />}

            <div className="col-lg-3">
              <div className="side-bar">
                <FilterSearch searchValueByCategory={searchValueByCategory} handleSearchByCategory={handleSearchByCategory} onHandleSearchByLocation={handleSearchByLocation} searchValueByLocation={searchValueByLocation} onHandleSearchByName={handleSearchByName} searchValueByName={searchValueByName} />
                {/* <FilterAdditional /> add it letter */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
