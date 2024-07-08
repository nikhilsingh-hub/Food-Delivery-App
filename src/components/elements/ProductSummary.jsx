import { useSelector } from "react-redux";
import { cartProducts } from "../../store/slices/cartSlice";
import { ProductSummaryCard } from "./ProductSummaryCard";

export const ProductSummary = ({cart}) => {
    return (
        <div className="flex flex-col">
            { cart && cart?.map((product, index) => {
                return (
                    product.amount &&
                    <div key={index} >
                        <ProductSummaryCard product={product}/>
                    </div>
                )
            })}
        </div>
    )
}