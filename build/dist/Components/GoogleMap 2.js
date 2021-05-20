import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
        lat: 48.856613,
        lng: 2.352222
      }
    };
  }
  handleChange = (address) => {
    this.setState({address});
  };
  handleSelect = (address) => {
    geocodeByAddress(address).then((results) => getLatLng(results[0])).then((latLng) => console.log("Success", latLng)).catch((error) => console.error("Error", error));
  };
  onMarkerClick = (props, marker, e) => this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      id: "googleMap"
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
    }), /* @__PURE__ */ React.createElement(InfoWindow, {
      marker: this.state.activeMarker,
      visible: this.state.showingInfoWindow
    }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, this.state.selectedPlace.name)))));
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyBLQCNPDwBkabLm5HkXXQg4RqFWPBrL_H4"
})(MapContainer);
