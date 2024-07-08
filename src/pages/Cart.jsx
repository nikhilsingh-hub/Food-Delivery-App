import React, {useState} from 'react'
import { Tabs } from "../components/elements/Tabs";
import { useSelector } from 'react-redux';
import Button from '../components/elements/Button';
import { cartProducts } from '../store/slices/cartSlice';
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import AddressForm from  '../components/elements/AddressForm'
import { ProductsSummary } from '../components/elements/ProductSummary';
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowleftSvg } from '../assets/icons/arrow-left-svgrepo-com.svg'

function Cart() {
    const allCartProducts = useSelector(cartProducts)
    const allTabs = ['Summary', 'Delivery', 'Payment']
    const [currentTab, setCurrentTab] = useState('Summary')

    const handleSwitch  = (tab) => {
        setCurrentTab(tab);
    }

  return (
    <div className='relative'>
    <Link to="/" className="absolute top-4 text-lg hover:text-gray-100 hover:scale-110 transition duration-300 flex w-fit bg-[#FCDE58] text-white font-bold py-2 px-4 rounded"><ArrowleftSvg/> Add more items</Link>
    <div className='bg-white w-full h-screen mt-14 flex items-center justify-center'>
        <div className='bg-white text-slate-900 w-2/3 rounded-lg shadow-md mt-2 mx-auto border border-gray-200
        sm:p-6 lg:p-8'>
            <Tabs list = {allTabs} activeTab={currentTab} onTabSwitch = {handleSwitch} />

            <div className={`${currentTab !== 'Summary' ? 'hidden':''}`}>
            {allCartProducts.length? <ProductsSummary/> : <p>No added product</p>}
                <Button variant="dark" className='flex flex-row gap-2 p-2 text-white float-right'
                onClick = {() => handleSwitch('Delivery')}
                >
                    <span>
                        Next
                    </span>
                    <ArrowRightSvg/>                
                </Button>
            </div>
            <div className={`${currentTab !== 'Delivery'? 'hidden' :''}`}>
                <AddressForm onTabSwitch={handleSwitch}/>
            </div>
            <div className={`${currentTab !== 'Payment' ? 'hidden' : ''}`}>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Cart
