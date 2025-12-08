import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Sample Item', price: 10.00, quantity: 2 },
    { id: 2, name: 'Another Item', price: 15.50, quantity: 1 },
    { id: 3, name: 'Third Item', price: 7.25, quantity: 3 },
  ], 
  totalQuantity: 0,
  totalAmount: 0.00,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If item exists, increment its quantity
        existingItem.quantity++;
      } else {
        // If not, add the new item with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;
    
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) return;

      if (existingItem.quantity === 1) {
      
        state.items = state.items.filter((item) => item.id !== id);
      } else {
       
        existingItem.quantity--;
      }
      state.totalQuantity--;
    },

  },
});

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;