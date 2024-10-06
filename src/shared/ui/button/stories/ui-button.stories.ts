import type { Meta, StoryObj } from '@storybook/vue3'

import UiButton from '..'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/UiButton',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'tertiary', 'quaternary'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    icon: { control: 'text' },
  },
  args: {
    type: 'primary',
    size: 'medium',
    disabled: false,
    loading: false,
    icon: '',
  },
} satisfies Meta<typeof UiButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'primary',
    default: 'Primary Button',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    default: 'Secondary Button',
  },
}

export const Large: Story = {
  args: {
    default: 'Large Button',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    default: 'Small Button',
    size: 'small',
  },
}

export const Disabled: Story = {
  args: {
    default: 'Disabled Button',
    disabled: true,
  },
}

export const Loading: Story = {
  args: {
    default: 'Loading Button',
    loading: true,
  },
}
