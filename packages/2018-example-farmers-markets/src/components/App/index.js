import React from 'react';

import { PageLayout, PullQuote } from '@hackoregon/component-library';

import FarmersMarketsOverTime from '../FarmersMarketsOverTime';
import PortlandFarmersMarkets from '../PortlandFarmersMarkets';

import '@hackoregon/component-library/assets/global.styles.css';

const App = () => (
  <PageLayout
    heroTitle="Shopping Local, Farmers' Markets"
    heroSubtitle="A look at Farmers' Markets in Portland and nationally"
    mainProjectColor="#5F9B4A"
  >
    <h1>Have We Hit Peak Farmers' Market?</h1>

    <p>
      There could be some stagnation in the number of new people buying local food.
      Or as the USDA puts it, “a plateau in consumer demand for local food.”
    </p>
    <p>
      Rising demand in the last several years has lead to the opening of many new markets.
      There were 8,268 farmers’ markets operating in 2014, up 180 percent since 2006.
    </p>

    <PullQuote quoteText="There were 8,268 farmers' markets operating in 2014, up 180% since 2006" />

    <p>
      “In densely populated urban areas, farmers’ markets often compete with each other
      for vendors and consumers,” the report reads. “In other areas, newer, more strategically
      located farmers’ markets may lead to the decline of previously established markets.”
    </p>

    <h2>The Local Food Economy Is Maturing</h2>

    <p>
      Farmers markets may be a good marketing tool for a small farm, but they can be onerous
      to prepare for, with slim profit margins, says Sarah Low, a USDA economist and lead
      author on the report.
    </p>

    <p>
      Because of that Low says farms are increasingly using middlemen to sell to restaurants,
      grocery stores and distributors. With an increasing share of their produce, dairy or
      meat going to those channels, some farmers may choose to forgo the farmers market.
    </p>

    <FarmersMarketsOverTime />

    <h2>How does Portland look today?</h2>

    <p>
      Portland has a nation-wide reputation for being progressive consumers. This label holds up
      when you consider how many farmers' markets are available to Portlanders. It's clear that
      there is something about this city that attracts grassroot and local initiatives.
    </p>

    <PortlandFarmersMarkets />

    <h2>There is room for more</h2>

    <p>
      If complete saturation of farmers' markets means having an accessible farmers' market
      from every neighborhood in the city, then we have progress still to make. Portlanders
      living in the innermost (and also most expensive) neighborhoods have their fill of
      options, but neighborhoods on the outskirts of the city and in the suburbs need to
      commute for the same options.
    </p>

  </PageLayout>
);

App.displayName = 'App';

export default App;
