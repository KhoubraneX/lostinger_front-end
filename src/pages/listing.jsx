import { useEffect, useState } from "react";
import ListingRight from "../components/lisitng-right";
import ListingGrid from "../components/listing-grid";
import PageTitleSection from "../components/pageTitleSection";
import axios from "../api/axios";
import FilterDropDown from "../components/srearch/filter-dropDown";
import FilterTags from "../components/srearch/filter-tags";
import FilterSearch from "../components/srearch/filter-search";
import FilterAdditional from "../components/srearch/fillter-additional";
import ViewType from "../components/viewType";
export default function Listing() {

  const [items, setItems] = useState(null)



  // fetch data
  useEffect(() => {
    let isMounted = true
    let controller = new AbortController()

    let fetchItems = async () => {
      try {
        let { data } = await axios.get("/space/api/items");
        if (isMounted) {
          setItems(data)
          setFilteredData(data);
          console.log(data);
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
    value: ""
  });
  const [searchValueByLocation, setSearchValueByLocation] = useState({
    value: ""
  });
  const [searchValueByCategory, setSearchValueByCategory] = useState({
    value: ""
  });
  const [searchValueByPlace, setSearchValueByPlace] = useState({
    value: ""
  });
  const [searchValueByStatus, setSearchValueByStatus] = useState({
    value: ""
  });

  const [sortOrder, setSortOrder] = useState('');

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    filterData(searchValueByLocation.value, searchValueByName.value, searchValueByCategory.value, searchValueByPlace.value, searchValueByStatus.value, event.target.value)
  }

  const [filteredData, setFilteredData] = useState(items);

  function filterData(Location, Name, Category, Place, Status, order = sortOrder) {
    let newData;
    newData = items.filter((item) =>
      item.location.toLowerCase().includes(Location.toLowerCase()) &&
      item.nameItem.toLowerCase().includes(Name.toLowerCase()) &&
      item.namePlace.toLowerCase().includes(Place.toLowerCase()) &&
      item.nameType.toLowerCase().includes(Status.toLowerCase()) &&
      item.nameCategorie.toLowerCase().includes(Category.toLowerCase())
    );
    if (order === 'asc') {
      newData = [...newData].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (order === "desc") {
      newData = [...newData].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    setFilteredData(newData);
  }

  function handleSearchByName(event) {
    setSearchValueByName({
      value: event.target.value
    });
    filterData(searchValueByLocation.value, event.target.value, searchValueByCategory.value, searchValueByPlace.value, searchValueByStatus.value);
  }

  function handleSearchByCategory(event) {
    setSearchValueByCategory({
      value: event.target.value
    });
    filterData(searchValueByLocation.value, searchValueByName.value, event.target.value, searchValueByPlace.value, searchValueByStatus.value);
  }

  function handleSearchByPlace(event) {
    setSearchValueByPlace({
      value: event.target.value
    });
    filterData(searchValueByLocation.value, searchValueByName.value, searchValueByCategory.value, event.target.value, searchValueByStatus.value);
  }

  function handleSearchByStatus(event) {
    setSearchValueByStatus({
      value: event.target.value
    });
    filterData(searchValueByLocation.value, searchValueByName.value, searchValueByCategory.value, searchValueByPlace.value, event.target.value);
  }

  function handleSearchByLocation(event) {
    setSearchValueByLocation({
      value: event.target.value
    });
    filterData(event.target.value, searchValueByName.value, searchValueByCategory.value, searchValueByPlace.value, searchValueByStatus.value);
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
          <FilterTags />
          <div className="row">
            {/* mode lisitng */}
            {listingMode === "right" ? <ListingRight items={filteredData} /> : <ListingGrid items={filteredData} />}

            <div className="col-lg-3">
              <div className="side-bar">
                <FilterSearch searchValueByCategory={searchValueByCategory} handleSearchByCategory={handleSearchByCategory} onHandleSearchByLocation={handleSearchByLocation} searchValueByLocation={searchValueByLocation} onHandleSearchByName={handleSearchByName} searchValueByName={searchValueByName} />
                <FilterAdditional />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
