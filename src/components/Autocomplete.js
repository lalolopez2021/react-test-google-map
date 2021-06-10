import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 450px;
  left:100px;
  z-index: 999;
  padding: 20px;
  @media (max-width: 768px) {
    left:50px;
  }
  @media (max-width: 576px) {
    left:20px;
    padding: 10px;
  }
`;

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        this.clearSearchBox = this.clearSearchBox.bind(this);
    }

    componentDidMount({ map, mapApi } = this.props) {
        const options = {
            types: ['address'],
        };
        this.autoComplete = new mapApi.places.Autocomplete(
            this.searchInput,
            options,
        );
        this.autoComplete.addListener('place_changed', this.onPlaceChanged);
        this.autoComplete.bindTo('bounds', map);
    }

    componentWillUnmount({ mapApi } = this.props) {
        mapApi.event.clearInstanceListeners(this.searchInput);
    }

    onPlaceChanged = ({ map, addplace } = this.props) => {
        const place = this.autoComplete.getPlace();

        if (!place.geometry) return;
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }

        addplace(place);
        this.searchInput.blur();
    };

    clearSearchBox() {
        this.searchInput.value = '';
    }

    render() {
        return (
            <Wrapper>
                <input
                    className="search-input"
                    ref={(ref) => {
                        this.searchInput = ref;
                    }}
                    type="text"
                    onFocus={this.clearSearchBox}
                    placeholder="Buscar ubicación..."
                />
            </Wrapper>
        );
    }
}

export default AutoComplete;