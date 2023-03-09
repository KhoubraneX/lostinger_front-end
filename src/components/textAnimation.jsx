import { useEffect, useState } from "react"

export default function TextAnimation() {
    let text = ["Wallet", "Phone", "Keys", "Jacket"]

    let [activeText, setActiveText] = useState(0)

    useEffect(() => {
        let handelTextAnimtion = () => {

            setTimeout(() => {
                if (activeText < text.length - 1) {
                    setActiveText(activeText + 1)
                } else {
                    setActiveText(0)
                }
            }, 2000)
        }

        handelTextAnimtion()
    }, [activeText, text.length])

    return (
        <>
            <h1 className="cd-headline slide">
                Find Your
                <span className="cd-words-wrapper no-padding-tb" >
                    {text.map((t, i) => <b key={t} style={{ width: "147px" }} className={i === activeText ? "is-visible" : "is-hidden"}>{t}</b>)}
                </span>
            </h1>
        </>
    )
}