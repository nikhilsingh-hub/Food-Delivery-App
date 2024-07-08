import React, {useState, useEffect} from 'react'
import ProductPreviewCard from './ProductPreviewCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, incrementProductAmount, cartProducts } from '../../store/slices/cartSlice';


function ProductPreview() {

    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const allProducts = useSelector(cartProducts)
  
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      useEffect(() => {
        fetch('http://localhost:8080/apiP/products')
          .then(response => response.json())
          .then((data) => {
              setProducts(data.data);
          })
          .catch(e => console.log(e))
      }, [])

      const onAddProductListener = (product) => {
        const isAvailable = allProducts.some(ele => ele._id === product._id);
    
        if (isAvailable) {
            dispatch(incrementProductAmount(product));
        } else {
            dispatch(addToCart(product));
        }
        
      }

  return (
    <div className="container mx-auto pb-4 w-2/3 text-black rounded-lg">
        <Carousel responsive={responsive}>
            {
                products.length > 0  && products.map((product, index) => ( <div className="w-full p-3" key={index}> 
                            <ProductPreviewCard product={product} onAddProduct={onAddProductListener} />
                </div> ))
            }
        </Carousel>
      
    </div>
  )
}

export default ProductPreview
