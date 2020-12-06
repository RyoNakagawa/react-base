import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Top, IProps } from '../../components/pages/Top';

export default {
    title: 'Pages/Top',
    component: Top,
  } as Meta;

  const Template: Story<IProps> = (args) => <Top {...args} />;

  export const TopPage = Template.bind({});
  TopPage.args = {
    text: 'test'
  };
  