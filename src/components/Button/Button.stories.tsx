import type { Meta } from '@storybook/react-vite';
import Button from './Button';

const meta = {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;
export default meta;

export const Default = () => <Button>Label</Button>;

export const Primary = () => <Button variant="primary">Label</Button>;

export const Disabled = () => <Button disabled>Label</Button>;
