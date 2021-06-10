import React,  {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';



  // const locations = [
  //   { lat: -31.56391, lng: 147.154312 },
  //   { lat: -33.718234, lng: 150.363181 },
  //   { lat: -33.727111, lng: 150.371124 },
  //   { lat: -33.848588, lng: 151.209834 },
  //   { lat: -33.851702, lng: 151.216968 },
  //   { lat: -34.671264, lng: 150.863657 },
  //   { lat: -35.304724, lng: 148.662905 },
  //   { lat: -36.817685, lng: 175.699196 },
  //   { lat: -36.828611, lng: 175.790222 },
  //   { lat: -37.75, lng: 145.116667 },
  //   { lat: -37.759859, lng: 145.128708 },
  //   { lat: -37.765015, lng: 145.133858 },
  //   { lat: -37.770104, lng: 145.143299 },
  //   { lat: -37.7737, lng: 145.145187 },
  //   { lat: -37.774785, lng: 145.137978 },
  //   { lat: -37.819616, lng: 144.968119 },
  //   { lat: -38.330766, lng: 144.695692 },
  //   { lat: -39.927193, lng: 175.053218 },
  //   { lat: -41.330162, lng: 174.865694 },
  //   { lat: -42.734358, lng: 147.439506 },
  //   { lat: -42.734358, lng: 147.501315 },
  //   { lat: -42.735258, lng: 147.438 },
  //   { lat: -43.999792, lng: 170.463352 },
  // ];



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

  //    initMap() {
  //   const myLatLng = { lat: -25.363, lng: 131.044 };
  //   const myLatLng2 = { lat: 48.79707625754021, lng: 2.440330326740543 };
  //   const map = new google.maps.Map(document.getElementById("googleMaps"), {
  //     zoom: 4,
      
  //   });
  //   new google.maps.Marker({
  //     position: myLatLng,
  //     map,
  //     title: "Hello World!",
  //   },
  //   {
  //     position: myLatLng2,
  //     map,
  //     title: "Hello World!",
  //   });
  // }

  // initMap() {

  // map = new google.maps.Map(document.getElementById("googleMaps"), mapOptions);
  // const marker = new google.maps.Marker({
  //   // The below line is equivalent to writing:
  //   // position: new google.maps.LatLng(-34.397, 150.644)
  //   position: { lat: 48.89255836391001, lng: 2.3209623682954033 },
  //   map: googleMaps,
  // });
  // // You can use a LatLng literal in place of a google.maps.LatLng object when
  // // creating the Marker object. Once the Marker object is instantiated, its
  // // position will be available as a google.maps.LatLng object. In this case,
  // // we retrieve the marker's position using the
  // // google.maps.LatLng.getPosition() method.
  // const infowindow = new google.maps.InfoWindow({
  //   content: "<p>Marker Location:" + marker.getPosition() + "</p>",
  // });
  // google.maps.event.addListener(marker, 'click', () => {
  //   infowindow.open(map, marker);
  // });
  // }



  // initMap() {
  //   const map = new google.maps.Map(document.getElementById("googleMaps"), {
  //     zoom: 3,
  //     center: { lat: -28.024, lng: 140.887 },
  //   });
  //   // Create an array of alphabetical characters used to label the markers.
  //   const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   // Add some markers to the map.
  //   // Note: The code uses the JavaScript Array.prototype.map() method to
  //   // create an array of markers based on a given "locations" array.
  //   // The map() method here has nothing to do with the Google Maps API.
  //   const markers = locations.map((location, i) => {
  //     return new google.maps.Marker({
  //       position: location,
  //       label: labels[i % labels.length],
  //     });
  //   });
  //   // Add a marker clusterer to manage the markers.
  //   new MarkerClusterer(map, markers, {
  //     imagePath:
  //       "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  //   });
  
  // const locations = [
  //   { lat: -31.56391, lng: 147.154312 },
  //   { lat: -33.718234, lng: 150.363181 },
  //   { lat: -33.727111, lng: 150.371124 },
  //   { lat: -33.848588, lng: 151.209834 },
  //   { lat: -33.851702, lng: 151.216968 },
  //   { lat: -34.671264, lng: 150.863657 },
  //   { lat: -35.304724, lng: 148.662905 },
  //   { lat: -36.817685, lng: 175.699196 },
  //   { lat: -36.828611, lng: 175.790222 },
  //   { lat: -37.75, lng: 145.116667 },
  //   { lat: -37.759859, lng: 145.128708 },
  //   { lat: -37.765015, lng: 145.133858 },
  //   { lat: -37.770104, lng: 145.143299 },
  //   { lat: -37.7737, lng: 145.145187 },
  //   { lat: -37.774785, lng: 145.137978 },
  //   { lat: -37.819616, lng: 144.968119 },
  //   { lat: -38.330766, lng: 144.695692 },
  //   { lat: -39.927193, lng: 175.053218 },
  //   { lat: -41.330162, lng: 174.865694 },
  //   { lat: -42.734358, lng: 147.439506 },
  //   { lat: -42.734358, lng: 147.501315 },
  //   { lat: -42.735258, lng: 147.438 },
  //   { lat: -43.999792, lng: 170.463352 },
  // ];
  
  // }
  
 
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
      lng: 2.365627413402361}} />
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
          
  
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDBj-SKr6Cj9aLaMoAILHvdPpxwG74xQv4' )
  
})(MapContainer)
