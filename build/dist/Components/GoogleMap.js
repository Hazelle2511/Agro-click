import React, {Component} from "../../_snowpack/pkg/react.js";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "../../_snowpack/pkg/google-maps-react.js";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "../../_snowpack/pkg/react-places-autocomplete.js";
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      lat: null,
      lng: null,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  handleChange = (address) => {
    this.setState({address});
  };
  handleSelect = (address) => {
    this.setState({address});
    geocodeByAddress(address).then((results) => getLatLng(results[0])).then((latLng) => {
      console.log("Success", latLng);
      this.setState({mapCenter: latLng});
    }).catch((error) => console.error("Error", error));
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({lat: position.coords.latitude, lng: position.coords.longitude});
    }, (error) => console.log(error));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      id: "googleMaps",
      className: "h-screen"
    }, /* @__PURE__ */ React.createElement(PlacesAutocomplete, {
      value: this.state.address,
      onChange: this.handleChange,
      onSelect: this.handleSelect
    }, ({getInputProps, suggestions, getSuggestionItemProps, loading}) => /* @__PURE__ */ React.createElement("div", {
      className: "text-center"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "autocomplete-dropdown-container"
    }, loading && /* @__PURE__ */ React.createElement("div", null, "Loading..."), suggestions.map((suggestion) => {
      const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
      const style = suggestion.active ? {backgroundColor: "#fafafa", cursor: "pointer"} : {backgroundColor: "#ffffff", cursor: "pointer"};
      return /* @__PURE__ */ React.createElement("div", {
        ...getSuggestionItemProps(suggestion, {
          className,
          style
        })
      }, /* @__PURE__ */ React.createElement("span", null, suggestion.description));
    })))), /* @__PURE__ */ React.createElement(Map, {
      google: this.props.google,
      initialCenter: {
        lat: this.state.lat,
        lng: this.state.lng
      },
      center: {
        lat: this.state.lat,
        lng: this.state.lng
      }
    }, /* @__PURE__ */ React.createElement(Marker, {
      position: {
        lat: this.state.lat,
        lng: this.state.lng
      }
    })));
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDBj-SKr6Cj9aLaMoAILHvdPpxwG74xQv4"
})(MapContainer);
