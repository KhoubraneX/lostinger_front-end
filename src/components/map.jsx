import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress
} from 'react-places-autocomplete';

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: ''};
  }

  handleChange = address => {
    this.setState({ address });
    this.props.handleLocationChange(address)
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => {
        this.setState({address : results[0].formatted_address})
        this.props.handleLocationChange(results[0].formatted_address)
      })
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.props.value}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className='autocomInput'>
            <input
              {...getInputProps({
                placeholder: this.props.placeholder,
                className: 'form-control',
              })}
            />
            <div className="autocomplete-dropdown-container autocom-box">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                return (
                  <div key={suggestion.description}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <li >{suggestion.description}</li>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput