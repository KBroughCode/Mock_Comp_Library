import { configure, getStorybook, setAddon} from '@storybook/react';
import createPercyAddon from '@percy-io/percy-storybook';
import requireContext from 'require-context.macro';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

configure(requireContext('../src/components', true, /\.stories\.js$/), module);

serializeStories(getStorybook);