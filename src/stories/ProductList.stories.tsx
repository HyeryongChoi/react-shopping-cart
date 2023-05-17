import type { Meta, StoryObj } from '@storybook/react';
import ProductList from '../components/product/ProductList';
import { handlers } from '../mocks/handlers';

const meta = {
  title: 'ShoppingCart/product/ProductList',
  component: ProductList,
  tags: ['autodocs'],
} satisfies Meta<typeof ProductList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    msw: handlers,
  },
};
