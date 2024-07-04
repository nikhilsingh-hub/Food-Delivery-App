import React from 'react'
import AddProduct from './AddProduct'

function ProductPreviewCard() {
  return (
    <div className="w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center">
    <h1></h1>
    <img src={product.imageUrl} alt={"no image"} />
    <h2 className="pb-2 text-lg">{product.name}</h2>
    <p className="mb-2 h-20 line-clamp-4">{product.desciption}</p>
    <AddProduct onAddProduct={addProduct} />
</div>
  )
}

export default ProductPreviewCard
