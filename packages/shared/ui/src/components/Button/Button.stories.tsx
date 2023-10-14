import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Button } from '.';

const meta = {
  title: 'shared-ui/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args}>{args.children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
