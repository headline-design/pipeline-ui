import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider, BaseStyles } from 'pipeline-ui'
import pipelineTheme from './pipelineTheme';

addParameters({
  options: {
    theme: pipelineTheme,
  },
});

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withA11y)

addDecorator(storyFn =>
  <ThemeProvider>
    <BaseStyles>
      {storyFn()}
    </BaseStyles>
  </ThemeProvider>
);

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.(js|mdx)$/), module);
