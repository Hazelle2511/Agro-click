import React,  {Component} from 'react';
// import carotteicon from '../images/'
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
      },
      error => console.log(error)
    );
  }


popup() {
  const sjulien = { lat: 48.866818612424225,
    lng: 2.365627413402361 };
  const map = new google.maps.Map(document.getElementById("googleMaps"), {
    zoom: 4,
    center: sjulien,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: sjulien,
    map,
    title: "Saint Julien",
  });
  marker.addEventListener("click", () => {
    infowindow.open(map, marker);
  });
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
              {/* <input className="text-center"
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              /> */}
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
    position={{lat: 48.866818612424225,
      lng: 2.365627413402361}}
      />
            <Marker
    position={{lat: 43.519183858448464,
      lng: 1.2894137402155907}} />
            <Marker
    position={{lat: 48.87926052798779,
      lng: 2.706498384566709}} />
      
            <Marker
    position={{lat: 50.77110012690095,
      lng: 2.6181057557950456}} />
    
          <Marker
    position={{lat: 43.5778927820445,
      lng: 1.349585353709131}} />
     
            <Marker
    position={{lat: 43.604554095893654,
      lng: 1.4417648113821122}} />
   
             
             <Marker
    position={{lat: 48.660517012295365,
      lng: 3.223361384559416}} />
      
              <Marker
    position={{lat: 50.686010711461,
      lng: 2.7128869692838435}} />
      
             <Marker
    position={{lat: 50.73438056027365,
        lng: 2.5558132404494476}} />
        <Marker/>
        
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDBj-SKr6Cj9aLaMoAILHvdPpxwG74xQv4' )
  
})(MapContainer)
