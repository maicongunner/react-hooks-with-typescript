import React, { useContext } from 'react';
import CartContext from './CartContext';

const exampleUsingUseContext: React.FC = () => {

  const { products } = useContext(CartContext);

  return(
    <ul>
      {products?.map(product => product.name)}
    </ul>
  )
}


export default exampleUsingUseContext;