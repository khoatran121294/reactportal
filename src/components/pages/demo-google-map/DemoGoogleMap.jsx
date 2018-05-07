import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './DemoGoogleMap.css';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

const MarkerSimple = () => <i className="fa fa-thumb-tack" aria-hidden="true" style={{ fontSize: 30, color: 'red' }}></i>;
const google = window.google;

class DemoGoogleMap extends Component {
    constructor() {
        super();
        this.searchBox = null;
        this.state = {
            map: {
                lat: 14.058324,
                lng: 108.277199
            }
        }
    }
    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="DemoGoogleMap">
                <div className="SearchBox">
                    <input type="text" ref="searchMapInput" placeholder="Enter any locations which you want to find on the world." />
                </div>
                <div className="MapWrapper">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyCP7oMhboMLwI0AK7hUeJIqe25HgrjUWHY" }}
                        defaultCenter={this.state.map}
                        defaultZoom={5}
                        onChange={this.onBoundsChangeOnMap.bind(this)}
                        ref="map"
                    >
                        <MarkerSimple
                            lat={this.state.map.lat}
                            lng={this.state.map.lng}
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }

    componentDidMount() {
        const that = this;
        const input = ReactDOM.findDOMNode(this.refs.searchMapInput);
        this.searchBox = new google.maps.places.SearchBox(input);
        this.searchBox.addListener('places_changed', function () {
            let places = this.getPlaces();
            console.log(places);
            if (places.length === 0) {
                console.log("Cannot find this location.");
                return;
            }
            let place = places[0];
            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds();
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
            that.setState({
                map: Object.assign({}, that.state.map, {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                })
            });
            // that.refs.map.fitBounds(bounds);
            // console.log(that.refs.map);
            // fitBounds(bounds);
            console.log(place.geometry.location.lat(), place.geometry.location.lng());
        });
    }
    componentWillUnmount() {
        // https://developers.google.com/maps/documentation/javascript/events#removing
        google.maps.event.clearInstanceListeners(this.searchBox);
    }
    onBoundsChangeOnMap({ center, zoom, bounds, marginBounds }) {
        console.log('bound changed');
        // console.log(bounds);
        // this.searchBox.setBounds(bounds);
    }
}

const mapStateToProps = state => {
    return {
        state
    }
};
const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoGoogleMap);
