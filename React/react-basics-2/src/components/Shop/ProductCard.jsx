import React from 'react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 p-4 rounded-lg flex flex-col gap-3">
      <div className="h-40 bg-gray-700 rounded-md flex items-center justify-center text-gray-500 italic">
        [ Image Placeholder ]
      </div>
      <div>
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <span className="text-sm text-blue-400 font-mono">{product.category}</span>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-2xl font-bold">${product.price}</span>
        <button 
          onClick={() => onAdd(product)}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md font-bold transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
