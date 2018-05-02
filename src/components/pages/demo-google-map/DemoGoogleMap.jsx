import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DEMO_REQUESTING } from "../../../actions";
import './DemoGoogleMap.css';
import GoogleMapReact from 'google-map-react';

const MarkerSimple = () => <i className="fa fa-thumb-tack" aria-hidden="true" style={{fontSize: 30, color: 'red'}}></i>;

class DemoGoogleMap extends Component {
    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
        zoom: 11
    }
    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="DemoGoogleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCP7oMhboMLwI0AK7hUeJIqe25HgrjUWHY" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <MarkerSimple
                        lat={40.7446790}
                        lng={-73.9485420}
                    />
                </GoogleMapReact>
            </div>
        );
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
