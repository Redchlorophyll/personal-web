import type { Preview } from '@storybook/react';

/* PLOP_INJECT_STYLING */
import 'web-ui/styles.css';
import 'shared-ui/styles.css';

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
};

export default preview;
