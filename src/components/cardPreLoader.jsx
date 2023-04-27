
export default function CardPreLoader({Length = 3 , mode, className = "margin-30px-bottom col-md-6" }) {

    return (
        Array(Length).fill().map((_, index) => (
            <div key={index} className={className}>
                <div className="wrapper">
                    <div className={`card-loader card-loader--tabs ${mode === "grid" ? "" : "card-loader-right"}`}></div>
                </div>
            </div>
        ))

    )
}