export default function LocationSteps() {
    return (
        <>
        <div className="row">
            <div className="form-group col-md-4">
                <select
                    className="form-control valid"
                    id="exampleFormControlSelect2"
                    aria-invalid="false"
                >
                    <option  value={0}>Where Found</option>
                    <option value={1}>Taxi</option>
                    <option value={2}>Restaurant</option>
                </select>
            </div>

            <div className="form-group col-md-4">
                <input
                    type="text"
                    className="form-control no-margin-bottom padding-10px-tb"
                    name="Address"
                    id="exampleInputAddress"
                    placeholder="Location"
                />
            </div>
            <div className="form-group col-md-4">
                <input
                    type="text"
                    className="form-control no-margin-bottom padding-10px-tb"
                    name="zibCode"
                    id="Code"
                    placeholder="Zip-Code"
                />
            </div>
            <div className="col form-group">
                <div className="padding-15px-all shadow bg-white">
                    <iframe
                        title="map"
                        className="contact-map"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                </div>
            </div>
        </div>
        </>
    );
}
