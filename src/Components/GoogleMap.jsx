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
         address: '',
    
    
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},

        // mapCenter: {
        //     lat: 48.856613,
        //     lng: 2.352222,
        //     }
      }
    }
     
      handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };
      //
   
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
          <div id="googleMap">
              <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div>
                    <input
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
                   {/* <Map google={this.props.google}
                    // onClick={this.onMapClicked}
                    initialCenter = {{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    center ={{
                        lat: this.state.mapCenter.lat,
                        lng: this.state.mapCenter.lng
                    }}
                    >
                 
                   <Marker
                        position ={{
                            lat: this.state.mapCenter.lat,
                            lng: this.state.mapCenter.lng
                        }} /> 
                 <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        position ={{
                          lat: this.state.mapCenter.lat,
                          lng: this.state.mapCenter.lng
                      }} /> 
        
                 <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
                </Map>  */}


                  <Map google={this.props.google}
                      // style={{width: '100%', height: '100%', position: 'relative'}}
                      // className={'map'}
                      zoom={14}>
                                    
                                    
                    <Marker onClick={this.onMarkerClick}
                      title={'The marker`s title will appear as a tooltip.'}
                      // name={'Toulouse, FR'}
                      // position={{lat: 43.604652, lng: 1.444209}} />
                      name={'SOMA'}
                      position={{lat: 37.778519, lng: -122.405640}}/>

                        <InfoWindow
                                      marker={this.state.activeMarker}
                                      visible={this.state.showingInfoWindow}>
                                      <div>
                                          <h1>{this.state.selectedPlace.name}</h1>
                                      </div>
                         </InfoWindow>
                    <Marker onClick={this.onMarkerClick}
                     name={'Dolores park'}
                     position={{lat: 37.759703, lng: -122.428093}} />
                      {/* name={'Amiens, FR'}
                      position={{lat: 49.893890, lng: 2.294230}} /> */}

                          <InfoWindow
                                      marker={this.state.activeMarker}
                                      visible={this.state.showingInfoWindow}>
                                      <div>
                                          <h1>{this.state.selectedPlace.name}</h1>
                                      </div>
                           </InfoWindow>
                    <Marker />

                    <Marker onClick={this.onMarkerClick}
                        // name={'Your position'}
                        // position={{lat: 37.762391, lng: -122.439192}}
                        // icon={{
                        //   url: "/path/to/custom_icon.png",
                        //   anchor: new google.maps.Point(32,32),
                        //   scaledSize: new google.maps.Size(64,64)
                        // }} />
                       name={'Paris'}
                      position={{lat: 48.856613, lng: 2.352222}} /> 

                            <InfoWindow
                                      marker={this.state.activeMarker}
                                      visible={this.state.showingInfoWindow}>
                                      <div>
                                          <h1>{this.state.selectedPlace.name}</h1>
                                      </div>
                            </InfoWindow>
                    <Marker />



                  </Map>
          </div>
      


      )
    }
  }
  export default GoogleApiWrapper({
    apiKey: ('AIzaSyBLQCNPDwBkabLm5HkXXQg4RqFWPBrL_H4')
  })(MapContainer)
