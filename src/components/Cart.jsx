import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeItem } from '../Features/Theme/Cart/cartSlice';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdShoppingCart } from 'react-icons/md';


const Cart = () => {
  // Read state from the cart slice
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

 
  const demoItem = { id: 1, name: 'Redux Toolkit T-Shirt', price: 25.00 };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-xl dark:bg-gray-800">
    

<h2 className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
    <MdShoppingCart size={30} className="inline-block mr-3" /> 

    Shopping Cart ({totalQuantity} items)
</h2>

      {/* ---  Add Button --- */}
      <button
        onClick={() => dispatch(addToCart(demoItem))}
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-150">
     
         Add Item
      </button>

      {/* --- Cart Items List --- */}
      {items.length === 0 ? (
        <p className="text-xl text-gray-500 dark:text-white">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-md dark:bg-gray-700 dark:border-gray-600">
            
              <div className="flex-grow">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className="p-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  <FaPlus />
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="p-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <FaMinus />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;