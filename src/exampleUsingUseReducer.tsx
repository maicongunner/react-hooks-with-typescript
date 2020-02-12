import React, { useReducer } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: string[],
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const exampleUsingUseReducer: React.FC = () => {

  const cart = useReducer(
      (state: Cart, action: CartActionType) => {
        switch(action.type) {
          case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'Produto novo']
          }
          default:
            return state;
        }
      },
    {
      products: ['asd'],
      shipping_value: 0,
    },
  );

  return(
    <ul>
      
    </ul>
  )
}


export default exampleUsingUseReducer;