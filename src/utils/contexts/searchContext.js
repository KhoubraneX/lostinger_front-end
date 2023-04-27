import { createContext, useContext, useState } from "react";

const SearchContext = createContext()

export function SearchParamsProvider({ children }) {

    const [searchParam, setSearchParam] = useState({
        brand: "",
        status: "",
        place: "",
        sortBy: "",
        name: "",
        location: "",
        category: ""
    });

    let updateSearchParams = (updatedData) => {
        setSearchParam(updatedData)
    }
    
    return (
        <>
        {searchParam && 
            <SearchContext.Provider value={{searchParam , updateSearchParams }}>
                {children}
            </SearchContext.Provider>}
        </>
    )
}

export const useSearchContext = () => useContext(SearchContext)