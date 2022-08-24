---
to: src/<%=directory%>/<%=name%>/<%=name%>.stories.tsx
---
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { <%= h.capitalize( h.changeCase.camel(name) ) %> } from './<%=name%>';

export default {
  component: <%= h.capitalize( h.changeCase.camel(name) ) %>,
  title: '<%= h.capitalize( h.changeCase.camel(name) ) %>',
} as ComponentMeta<typeof <%= h.capitalize( h.changeCase.camel(name) ) %>>;

const Template: ComponentStory<typeof <%= h.capitalize( h.changeCase.camel(name) ) %>> = (args) => (
  < <%= h.capitalize( h.changeCase.camel(name) ) %> {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};