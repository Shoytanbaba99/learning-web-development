import React from 'react';

const CartItem = ({ item, onAdd, onRemove }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-700">
      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-400 text-sm">${item.price} x {item.quantity}</p>
      </div>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onRemove(item)}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md"
        >
          -
        </button>
        <span className="w-4 text-center font-mono">{item.quantity}</span>
        <button 
          onClick={() => onAdd(item)}
          className="w-8 h-8 flex items-center justify-center bg-gray-700 hover:bg-gray-600 rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
