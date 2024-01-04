import { useLayoutEffect, useState } from "react";
import CardPreLoader from "./cardPreLoader";
import axios from "../api/axios";
import { ItemCardGrid } from "./itemCard";
import { useUserIpContext } from "../utils/contexts/userIpAdrees";
import SectionTitle from "./sectionTitle";

export default function ItemsNear() {

    const [itemNear, setItemNear] = useState(null)

    let ipAddress = useUserIpContext()

    useLayoutEffect(() => {
        let isMounted = true;
        let controller = new AbortController();
        let fetchItems = async () => {
            // fet location by ip address
            try {
                let { data } = await axios.get(`/api/items/search?city=${ipAddress.city}`);
                if (isMounted) {
                    setItemNear(data);
                    console.log(ipAddress);
                }
            } catch ({ response }) {
                setItemNear(null)
            }
        };

        fetchItems();
        return () => {
            isMounted = false;
            controller.abort();
        };
    }, []);

    return (
        <>
            <section className="no-padding-top">
                <div className="container">
                    <SectionTitle title="Found items Near You" subTitle="We found lost items Near You"/>
                    <div className="row">
                        {!itemNear &&
                            <CardPreLoader Length={3} mode="grid" className="col-md-6 col-lg-4 margin-30px-bottom" />
                        }
                        {itemNear && itemNear.slice(0, 6).map((item) => <ItemCardGrid key={item._idItem} item={item} className="col-md-6 col-lg-4 margin-30px-bottom" />)}
                    </div>
                </div>
            </section>
        </>
    )
}