
export default function Spinner({className = ""}) {
    return (
    <>
        <div className={`spinner-border spinner-border-sm text-white ${className}`} role="status">
                <span className="sr-only">Loading...</span>
        </div>
    </>
    )

}