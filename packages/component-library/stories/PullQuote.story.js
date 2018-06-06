import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PullQuote } from '../src';

const displayName = PullQuote.displayName || 'PullQuote';
const title = 'Simple usage';
const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

const quoteText = 'Hack Oregon is fun. A super super super super super long quote';
const quoteAttribution = 'Susannah';

const demoCode = () => (
  <PullQuote
    quoteText={quoteText}
    quoteAttribution={quoteAttribution}
  />
);

const altDemo = () => (
  <PullQuote
    quoteText={quoteText}
  />
);

const altTitle = 'without attribution';

export default () => storiesOf(displayName, module)
  .add(
    title,
    demoCode
  )
  .add(altTitle, altDemo);
