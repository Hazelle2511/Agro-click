// import React from 'react';
// import ReactDOM from 'react-dom';

// const mapStyles = {
//   map: {
//     position: 'absolute',
//     width: '100%',
//     height: '100%'
//   }
// };

// export class CurrentLocation extends React.Component {
//     constructor(props) {
//         super(props);
    
//         const { lat, lng } = this.props.initialCenter;
    
//         this.state = {
//           currentLocation: {
//             lat: lat,
//             lng: lng
//           }  
//         };

//         componentDidUpdate(prevProps, prevState) {
//             if (prevProps.google !== this.props.google) {
//               this.loadMap();
//             }
//             if (prevState.currentLocation !== this.state.currentLocation) {
//               this.recenterMap();
//             }
      
//     CurrentLocation.defaultProps = {
//         zoom: 14,
//         initialCenter: {
//           lat: -1.2884,
//           lng: 36.8233
//         },
//         centerAroundCurrentLocation: false,
//         visible: true
//       };


//   recenterMap() {
//     const map = this.map;
//     const current = this.state.currentLocation;
//     const google = this.props.google;
//     const maps = google.maps;

//     if (map) {
//       let center = new maps.LatLng(current.lat, current.lng);
//       map.panTo(center);
//     }
//   }
//   componentDidMount() {
//     if (this.props.centerAroundCurrentLocation) {
//       if (navigator && navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(pos => {
//           const coords = pos.coords;
//           this.setState({
//             currentLocation: {
//               lat: coords.latitude,
//               lng: coords.longitude
//             }
//           });
//         });
//       }
//     }
//     this.loadMap();
//   }
   
        
// }


   


// export default CurrentLocation;