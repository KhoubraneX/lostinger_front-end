import { useEffect, useState } from "react";

export default function TopButton() {

    const [showButton, setShowButton] = useState(false);

    function handelVis() {
        let windowHeight = window.innerHeight;
        let windowScrollY = window.scrollY;

        if (windowScrollY > windowHeight) {
            setShowButton(true);
        }else {
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handelVis);
    }, []);

    return (
        <>
        { showButton && (
            <button className="scroll-to-top" onClick={()=> window.scrollTo(0, 0)}><i className="fas fa-angle-up" aria-hidden="true" /></button>
        )}
        </>);
}