export const AddProduct = ({onAddProduct}) => {
    return (
        <div>
            <button 
            className="bg-yellow-400 hover:bg-yellow-500 w-5 h-5 flex items-center justify-center text-lg"
            onClick={onAddProduct}
            >
                <span>+</span>
            </button>
        </div>
    )
}