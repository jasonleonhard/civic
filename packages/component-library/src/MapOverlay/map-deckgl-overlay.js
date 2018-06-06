import React, {Component} from 'react';
import DeckGL, {GeoJsonLayer} from 'deck.gl';

const LIGHT_SETTINGS = {
  lightsPosition: [-125, 50.5, 5000, -122.8, 48.5, 8000],
  ambientRatio: 0.2,
  diffuseRatio: 0.5,
  specularRatio: 0.3,
  lightsStrength: [1.0, 0.0, 2.0, 0.0],
  numberOfLights: 2
};

const DeckGLOverlay = (props) => {
  const {
    viewport,
    data,
    colorScale,
    opacity,
    filled,
    wireframe,
    extruded,
    elevation,
    // onHover,
  } = props;

  const layer = new GeoJsonLayer({
    id: 'geojson',
    data,
    opacity,
    filled,
    extruded,
    wireframe,
    stroked: false,
    fp64: true,
    getElevation: f => Math.sqrt(f.properties.valuePerSqm) * elevation,
    getFillColor: f => colorScale(f.properties.growth),
    getLineColor: f => [255, 255, 255],
    lightSettings: LIGHT_SETTINGS,
    // pickable: Boolean(this.props.onHover),
    // onHover: this.props.onHover
    // onHover,
  });

  return <DeckGL {...viewport} layers={[layer]} />;
}

export default DeckGLOverlay;
