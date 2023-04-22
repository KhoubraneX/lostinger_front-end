
export default function CardPreLoader({ mode }) {

    return (
        <div className="row">
            <div className={`margin-30px-bottom ${mode === "grid" ? "col-md-6" : "col-md-12"}`}>
                <div className="wrapper">
                    <div className={`card-loader card-loader--tabs ${mode === "grid" ? "" : "card-loader-right"}`}></div>
                </div>
            </div>
            <div className={`margin-30px-bottom ${mode === "grid" ? "col-md-6" : "col-md-12"}`}>
                <div className="wrapper">
                    <div className={`card-loader card-loader--tabs ${mode === "grid" ? "" : "card-loader-right"}`}></div>
                </div>
            </div>
            <div className={`margin-30px-bottom ${mode === "grid" ? "col-md-6" : "col-md-12"}`}>
                <div className="wrapper">
                    <div className={`card-loader card-loader--tabs ${mode === "grid" ? "" : "card-loader-right"}`}></div>
                </div>
            </div>
            <div className={`margin-30px-bottom ${mode === "grid" ? "col-md-6" : "col-md-12"}`}>
                <div className="wrapper">
                    <div className={`card-loader card-loader--tabs ${mode === "grid" ? "" : "card-loader-right"}`}></div>
                </div>
            </div>
        </div>
    )
}