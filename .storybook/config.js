import { configure, getStorybook, setAddon} from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

configure(require.context('../src/components', true, /\.stories\.js$/), module);

serializeStories(getStorybook);