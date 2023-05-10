import { styled } from 'styled-components';
import mockData from '../assets/mock.json';
import Product from './Product';

export default function ProductList() {
  return (
    <Style.Container>
      {mockData.map((data) => (
        <li key={data.id}>
          <Product data={data} />
        </li>
      ))}
    </Style.Container>
  );
}

const Style = {
  Container: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 45px;
    grid-row-gap: 60px;
  `,
};
