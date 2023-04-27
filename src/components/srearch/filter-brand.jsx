import { useLayoutEffect, useState } from "react"
import axios from "../../api/axios"

export default function FilterBrand({onHandleBrandChange , searchValueByBrand }) {

    let [usedBrand, setUsedBrand] = useState();

    useLayoutEffect(() => {
        let isMounted = true
        let controller = new AbortController()

        let fetchItems = async () => {
            try {
                let { data } = await axios.get("/space/api/itemDetails/usedBrand");
                isMounted && setUsedBrand(data)
            } catch (error) {
                console.log("error used brand");
            }
        }

        fetchItems()
        return () => {
            isMounted = false
            controller.abort()
        }
    }, [])

    return (
        <>
            <div className="margin-60px-bottom">
            {!usedBrand && <div className="wrapper">
                    <div className={`card-loader tags card-loader--tabs`}></div>
            </div>}
                {usedBrand && <span className="margin-20px-right font-size18">Brand</span>}
                {usedBrand && usedBrand.map(({ brand, brand_count }) => (
                    <div key={brand} className="form-check form-check-inline margin-30px-right md-margin-15px-right">
                        <input
                        onChange={onHandleBrandChange}
                            className="form-check-input"
                            type="checkbox"
                            value={brand}
                        />
                        <label
                            className="form-check-label text-extra-dark-gray"
                            htmlFor="inlineCheckbox1"
                        >
                            {brand} ({brand_count})
                        </label>
                    </div>
                ))}
            </div>
        </>
    )
}