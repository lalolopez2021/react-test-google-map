import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import AutoComplete from './Autocomplete';
import Marker from './Marker';
import { connect } from "react-redux";
import { addMarkerMap } from '../actions/marker';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const GOOGLEMAP_KEY = process.env.GOOGLEMAP_KEY;

class GoogleMapCustom extends Component {

    shouldComponentUpdate(nextProps, nextState) {
      
        if (this.state.lat !== nextState.lat) {
            return true;
        }

        if (this.props.markers !== nextProps.markers) {
            return true;
        }
        
        return false;
    }

    state = {
        mapApiLoaded: false,
        mapInstance: null,
        mapApi: null,
        geoCoder: null,
        center: [],
        zoom: 17,
        lat: null,
        lng: null
    };

    componentDidMount() {
        this.setCurrentLocation();
    }

    setCurrentLocation() {
        
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: [position.coords.latitude, position.coords.longitude],
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });                
            });
        }
    }

    _onChange = ({ center, zoom }) => {
        this.setState({
            center: center,
            zoom: zoom,
        });

    }

    _onClick = (value) => {
        this.setState({
            lat: value.lat,
            lng: value.lng
        });
    }

    apiHasLoaded = (map, maps) => {
        this.setState({
            mapApiLoaded: true,
            mapInstance: map,
            mapApi: maps,
            center: [this.state.lat, this.state.lng]
        });

        this.addMarker(); 
    };

    addPlace = (place) => {
        this.setState({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });

        this.addMarker();
    };

    addMarker() {
        const { mapApi } = this.state;
        const geocoder = new mapApi.Geocoder();

        geocoder.geocode({ 'location': { lat: this.state.lat, lng: this.state.lng } }, (results, status) => {
            if (status === 'OK') {
                if (results[0]) {
                    this.props.ADD_MARKER({
                        address: results[0].formatted_address,
                        lat: this.state.lat, 
                        lng: this.state.lng,
                    });
                } else {
                    window.alert('No results found');
                    return "";
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }

    render() {
        const { mapApiLoaded, mapInstance, mapApi, } = this.state;

        return (
            <Wrapper>
                {mapApiLoaded && (
                    <div>
                        <AutoComplete map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
                    </div>
                )}
                <GoogleMapReact
                    options={{ gestureHandling: "greedy" }}
                    defaultZoom={8}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    onChange={this._onChange}
                    onClick={this._onClick}
                    bootstrapURLKeys={{
                        key: GOOGLEMAP_KEY,
                        libraries: ['places', 'geometry'],
                    }}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
                >

                {this.props.markers.map((marker, i) =>{
                    return(
                        <Marker
                        key={i}
                        text={marker.address}
                        lat={marker.lat}
                        lng={marker.lng}
                    />)
                })} 

                </GoogleMapReact>
            </Wrapper >
        );
    }
}

const mapStateToProps = state => {
    return {
      markers: state.mapredu.markers
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        ADD_MARKER: value => dispatch(addMarkerMap(value.address, value.lat, value.lng))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleMapCustom);
  