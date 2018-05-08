import React, { PropTypes } from 'react';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictorySharedEvents,
  VictoryContainer,
  VictoryTheme,
  VictoryLabel
} from 'victory';

import ChartContainer from '../ChartContainer';
import CivicVictoryTheme from '../VictoryTheme/VictoryThemeIndex';
import { assign } from "lodash";

const HorizontalBarChart = ({ data, dataKey, dataValue, dataKeyLabel, dataValueLabel, title, subtitle }) =>
  <ChartContainer title={title} subtitle={subtitle}>
    <VictoryChart
      domainPadding={20}
      animate={{duration: 300}}
      theme={CivicVictoryTheme.civic}
    >
      <VictoryAxis
        // tickValues specifies both the number of ticks and where
        // they are placed on the axis
        tickValues={data.map(a => a[dataKey])}
        tickFormat={data.map(a => a[dataKeyLabel])}
      />
      <VictoryAxis
        dependentAxis
        // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryBar
        data={data.map(a => ({ dataKey: a[dataKey], dataValue: a[dataValue] }))}
        x={'dataKey'}
        y={'dataValue'}
      />
    </VictoryChart>
  </ChartContainer>

HorizontalBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataKey: PropTypes.string.isRequired,
  dataValue: PropTypes.string.isRequired,
  dataKeyLabel: PropTypes.string,
  dataValueLabel: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default HorizontalBarChart;
