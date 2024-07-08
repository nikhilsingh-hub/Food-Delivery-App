export const AddProduct = ({onAddProductListen, product}) => {
    return (
        <div>
            <button 
            className="bg-yellow-400 hover:bg-yellow-500 w-5 h-5 flex items-center justify-center text-lg"
            onClick={() => onAddProductListen(product)}
            >
                <span>+</span>
            </button>
        </div>
    )
}