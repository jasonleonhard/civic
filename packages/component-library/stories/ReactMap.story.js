import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { withKnobs, number, selectV2 } from '@storybook/addon-knobs';
import { ReactMap } from '../src';
import '@hackoregon/component-library/assets/mapbox-gl.css';

const displayName = ReactMap.displayName || 'ReactMap';

const mapboxToken = 'pk.eyJ1IjoidGhlbWVuZG96YWxpbmUiLCJhIjoiY2o1aXdoem1vMWtpNDJ3bnpqaGF1bnlhNSJ9.sjTrNKLW9daDBIGvP3_W0w';

const demoMap = () => {
  const defaultLatitude = 45.5237732;
  const optionsLatitude = {
    range: true,
    min: 25,
    max: 50,
    step: 0.0000001,
  };
  const latitude = number('Center Latitude (North/South)', defaultLatitude, optionsLatitude);

  const defaultLongitude = -122.6622935;
  const optionsLongitude = {
    range: true,
    min: -125,
    max: -65,
    step: 0.0000001,
  };
  const longitude = number('Center Longitude (West/East)', defaultLongitude, optionsLongitude);

  const defaultZoom = 4;
  const optionsZoom = {
    range: false,
    min: 1,
    max: 15,
    step: 1,
  };
  const zoom = number('Zoom Level', defaultZoom, optionsZoom);

  const optionsStyle = {
    'Lè Shine': 'mapbox://styles/themendozaline/cjg6296ub04ot2sqv9izku3qq',
    'Label Maker': 'mapbox://styles/themendozaline/cjg627xuw08mk2spjsb8jmho7',
    'Moonlight': 'mapbox://styles/themendozaline/cjgq6r2lg00072rmqj1wocgdq',
    'Navigation Guidance Night': 'mapbox://styles/themendozaline/cj6y6f5m006ar2sobpimm7ay7',
    'North Star': 'mapbox://styles/themendozaline/cj5oyewyy0fg22spetiv0hap0',
    'Odyssey': 'mapbox://styles/themendozaline/cjgq6rklb000d2so1b8myaait',
    'Scenic': 'mapbox://styles/themendozaline/cj8rrlv4tbtgs2rqnyhckuqva',
  };
  const mapboxStyle = selectV2('Mapbox Style', optionsStyle, optionsStyle['Label Maker']);

  return (
    <ReactMap
      latitude={latitude} longitude={longitude} zoom={zoom}
      mapboxToken={mapboxToken} mapboxStyle={mapboxStyle} />
  );
};

export default () => storiesOf(displayName)
  .addDecorator(withKnobs)
  .add(
    'Simple usage',
    (demoMap)
  ).add(
    'Default map', (() => (
    <ReactMap mapboxToken={mapboxToken} />
  )));