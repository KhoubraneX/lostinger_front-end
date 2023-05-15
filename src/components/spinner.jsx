
export default function Spinner({className = "" , style = {}}) {
    return (
    <>
        <div style={style} className={`spinner-border spinner-border-sm text-white ${className}`} role="status">
                <span className="sr-only">Loading...</span>
        </div>
    </>
    )

}