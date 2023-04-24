export default function FilterAdditional() {
    return (
        <><div className="widget">
        <div className="widget-title">
          <h3>More Filters</h3>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck1"
          />
          <label className="form-check-label" htmlFor="defaultCheck1">
            Elevator in building
          </label>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck2"
          />
          <label className="form-check-label" htmlFor="defaultCheck2">
            Friendly workspace
          </label>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck3"
          />
          <label className="form-check-label" htmlFor="defaultCheck3">
            Instant Book
          </label>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck4"
          />
          <label className="form-check-label" htmlFor="defaultCheck4">
            Wireless Internet
          </label>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck5"
          />
          <label className="form-check-label" htmlFor="defaultCheck5">
            Free parking on premises
          </label>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck6"
          />
          <label className="form-check-label" htmlFor="defaultCheck6">
            Free parking on street
          </label>
        </div>
        <div className="form-check margin-5px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck7"
          />
          <label className="form-check-label" htmlFor="defaultCheck7">
            Smoking allowed
          </label>
        </div>
        <div className="form-check margin-20px-bottom">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue
            id="defaultCheck8"
          />
          <label className="form-check-label" htmlFor="defaultCheck8">
            Events
          </label>
        </div>
        <a href="#" className="butn">
          Update
        </a>
      </div></>
    )
}