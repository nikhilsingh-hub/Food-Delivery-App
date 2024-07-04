import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../store/slices/productSlice";
import ProductDetailCard from "../components/elements/ProductDetailCard";
import { Tabs } from "../components/elements/Tabs";
import { addToCart } from "../store/slices/cartSlice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const onAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    const onTabSwitch = (newActiveTab) => {
        setActiveTab(newActiveTab);
        let categories = products.products.map((product) => product.name.name);
        let index = categories.findIndex(category => newActiveTab === category);

        if (index > -1) {
            setActiveTabIndex(index);
        } else {
            setActiveTabIndex(0);
        }
    }

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 5000, min: 4000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 4000, min: 1024 },
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

    return (
        <div className="bg-white mt-12">
            {
                products.status !== 'fulfilled' ?
                    <div>loading...</div> :
                    <div>
                        {
                            products.products.length ?
                                <Tabs
                                    list={products.products.map((product) => product.name.name)}
                                    activeTab={activeTab}
                                    onTabSwitch={onTabSwitch}
                                />
                                : "No tabs"
                        }

                        <div className="container mx-auto pb-4 w-2/3 text-black rounded-lg top-0 bg-gradient-to-b from-slate-600 to-transparent">
                            <Carousel responsive={responsive}>
                                {
                                      products.products.length ? products.products[activeTabIndex].products.map((product, index) => {
                                        return (
                                            <ProductDetailCard key={index} product={product} onAddProduct={onAddProduct} />
                                        )
                                    })
                                        : "No products"
                                }
                            </Carousel>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Menu;