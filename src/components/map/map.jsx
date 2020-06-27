import React from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import OfferTypes from '../../types/offer.js';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.map = React.createRef();
  }

  componentDidMount() {
    const {offers, currentOffer} = this.props;

    const city = [52.38333, 4.9];
    const zoom = 12;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const currentOfferIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const map = leaflet.map(this.map.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`})
        .addTo(map);

    offers.map((offer) => leaflet.marker(offer.coordinates, {icon}).addTo(map));

    if (currentOffer) {
      leaflet.marker(currentOffer.coordinates, {currentOfferIcon}).addTo(map);
    }
  }

  componentWillUnmount() {
    this.map.current = null;
  }

  render() {
    const {isPropertyMap} = this.props;
    return (
      <section className={`map ${isPropertyMap ? `property__map` : `cities__map` }`} id="map" ref={this.map}></section>
    );
  }
}

export default Map;

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferTypes.isRequired).isRequired,
  isPropertyMap: PropTypes.bool.isRequired,
  currentOffer: PropTypes.arrayOf(OfferTypes.isRequired)
};
