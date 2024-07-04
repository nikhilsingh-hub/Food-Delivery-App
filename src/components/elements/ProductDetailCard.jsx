import React from 'react'
import Button from './Button'

function ProductDetailCard({ product, onAddProduct }) {
    return (
      <div className="p-4 m-4 rounded-lg bg-slate-50 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex flex-col items-center justify-between">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-xl text-gray-700 mb-4">{product.description}</p>
        </div>
        <div className="w-full flex items-center justify-center mb-4">
          <img
            src={product.imageUrl}
            className="w-40 h-40 rounded-xl object-cover transition-transform duration-300 hover:rotate-3 hover:scale-110"
            alt={product.name}
          />
        </div>
        <div className="flex justify-between items-center w-full mb-4">
          <div className="text-xl text-black">{`Rs. ${product.price}`}</div>
        </div>
        <div className="flex justify-end w-full">
          <button
            onClick={onAddProduct}
            className="bg-yellow-200 p-2 text-black rounded-lg transition duration-300 hover:bg-yellow-300 hover:shadow-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
  
  export default ProductDetailCard;
  
