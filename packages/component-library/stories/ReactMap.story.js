import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import { ReactMap } from '../src';
import '@hackoregon/component-library/assets/mapbox-gl.css';

const styles = [
  {name: 'Scenic', url: 'mapbox://styles/themendozaline/cj8rrlv4tbtgs2rqnyhckuqva'},
  {name: 'Navigation Guidance Night', url: 'mapbox://styles/themendozaline/cj6y6f5m006ar2sobpimm7ay7'},
  {name: 'label maker', url: 'mapbox://styles/themendozaline/cjg627xuw08mk2spjsb8jmho7'},
];

const displayName = ReactMap.displayName || 'ReactMap';
const title = 'Simple usage';
const description = `
  This is a basic React-Map-GL map.`;

const demoCode = () => (
  <ReactMap
    latitude={47.6062} longitude={-122.3321}
    mapboxStyle={styles[2].url} />
);

export default () => storiesOf(displayName)
  .add(
    title,
    (demoCode)
  ).add(
    'Default map', (() => (
    <ReactMap />
  )));