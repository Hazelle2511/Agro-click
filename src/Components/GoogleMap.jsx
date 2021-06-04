import React,  {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',
      lat: null,
      lng: null,

      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
  
      
    };
  }

  handleChange = address => {
    this.setState({ address });
  };
 
  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };

  
  // componentDidMount() {
  //   if ("geolocation" in navigator) {
  //     console.log("Available");
  //   } else {
  //     console.log("Not Available");
  //   }
  // }

  //  UserPosition = position => {
  //   this.setState({ position });
  //   lat = position.coords.latitude,
  //   lng = position.coords.longitude
  // };

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
      },
      error => console.log(error)
    );
  }
 
  render() {
    return (

      

      <div id='googleMaps' className="h-screen">

        
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div className="text-center">
              <input className="text-center"
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <Map 
          google={this.props.google}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          center={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
        >
          <Marker 
            position={{
              lat: this.state.lat,
              lng: this.state.lng
            }} />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDBj-SKr6Cj9aLaMoAILHvdPpxwG74xQv4' )
  
})(MapContainer)
