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
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 49.2827291,
        lng: -123.1207375
      }
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
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      id: "googleMaps"
    }, /* @__PURE__ */ React.createElement(PlacesAutocomplete, {
      value: this.state.address,
      onChange: this.handleChange,
      onSelect: this.handleSelect
    }, ({getInputProps, suggestions, getSuggestionItemProps, loading}) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("input", {
      ...getInputProps({
        placeholder: "Search Places ...",
        className: "location-search-input"
      })
    }), /* @__PURE__ */ React.createElement("div", {
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
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
      },
      center: {
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
      }
    }, /* @__PURE__ */ React.createElement(Marker, {
      position: {
        lat: this.state.mapCenter.lat,
        lng: this.state.mapCenter.lng
      }
    })));
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDR-W-vv3VskO9RrX2D8U3TUwihS_07h3w"
})(MapContainer);
