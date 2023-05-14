import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/GlobalStyle';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <BrowserRouter>
          <GlobalStyle />
          <Story />
        </BrowserRouter>
      </RecoilRoot>
    ),
  ],
};

export default preview;
