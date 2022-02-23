import { configureStore } from '@reduxjs/toolkit'

// const shoppingCartInitialState = [];

// export const addItemToCartAction = 'addItemToCart';

// export const removeItemFromCartAction = 'removeItemFromCart';

// export const emptyCartAction = 'emptyCart';

// const shoppingCartReducer = (state = shoppingCartInitialState, action) => {

//   if(action.type === addItemToCartAction){
//     // write some logic to add item to cart

//     // Check if the item is already in the cart
//     const itemFoundInCart = state.find(cartItem => cartItem.id === action.cartItem.id);

//     // if its not, we can add it at the end with a quantity of 1
//     if(!itemFoundInCart){
//       return [...state, {...action.cartItem, quantity: 1}];
//     }

//     // if it is actually already in the cart    
//     // we will still remove it
//     const cartWithFoundItemRemoved = state.filter(item => item.id !== action.cartItem.id);
//     // but add it again with the correct updated quantity.
//     return [...cartWithFoundItemRemoved, {...action.cartItem, quantity: itemFoundInCart.quantity + 1 }]
    
//   }

//   if(action.type === removeItemFromCartAction){
//     // write some logic to remove item fromn cart

//     return state.filter(item => item.id !== action.itemId)
//   }


//   if(action.type === emptyCartAction){
//     // write some logic to empty the shopping cart
//     return shoppingCartInitialState;
//   }

//   return state;
// };

const ACTIONS = {
  LOG_IN: "sign-in",
  USERSTATE: {user: undefined},
}

export const userLogIn = (user)=>({
  type: ACTIONS.LOG_IN,
  payload: {user: user},
})

const userReducer = (state , action) =>{
  switch (type.action) {
    case ACTIONS.LOG_IN:
          const {payload} = action;
          return {...state, user: payload.user} 
    default:
      return state;      
  }
}

const store = configureStore({
  reducer: {
    // shoppingCart:  shoppingCartReducer,
    userReducer,
    userState: ACTIONS.USERSTATE,
  },
})

export default store;