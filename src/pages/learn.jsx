import { useState } from "react"

export default function Learn() {
    let [number , setnumber] = useState(10)

    function fun(n) {
        return n < 1 ? n : Math.random()
    }


    return (
        <>
            <h2>hi iam learning now</h2>
            <input type="text" onChange={(e) => {
                setnumber(e.target.value)
            }} />
            <h4>{fun(number)}</h4>
        </>
    )
}