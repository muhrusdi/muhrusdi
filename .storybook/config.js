import { configure, addDecorator } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import { withThemesProvider } from 'storybook-addon-emotion-theme'
import themes from '../src/components/utilities/themes'

setConsoleOptions({
  panelExclude: [],
});

addDecorator(withThemesProvider([themes.light]))

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
