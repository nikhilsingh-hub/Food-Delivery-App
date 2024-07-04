import React, {useState} from 'react'
import { Tabs } from "../components/elements/Tabs";
import { useSelector } from 'react-redux';
import Button from '../components/elements/Button';
import { cartProducts } from '../store/slices/cartSlice';
import { ReactComponent as ArrowRightSvg } from "../assets/icons/arrow-right-long-svgrepo-com.svg";
import AddressForm from  '../components/elements/AddressForm'
import { ProductsSummary } from '../components/elements/ProductSummary';


function Cart() {
    const allCartProducts = useSelector(cartProducts)
    const allTabs = ['Summary', 'Delivery', 'Payment']
    const [currentTab, setCurrentTab] = useState('Summary')

    const handleSwitch  = (tab) => {
        setCurrentTab(tab);
    }

  return (
    <div className='bg-white w-full h-screen mt-14 flex items-center justify-center'>
        <div className='bg-white text-slate-900 w-2/3 rounded-lg shadow-md mt-2 mx-auto border border-gray-200
        sm:p-6 lg:p-8'>
            <Tabs list = {allTabs} activeTab={currentTab} onTabSwitch = {handleSwitch} />

            <div className={`${currentTab !== 'Summary' ? 'hidden':''}`}>
                <ProductsSummary/>
                <Button className='flex flex-row gap-2 bg-slate-500 p-2 text-white float-right'
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
  )
}

export default Cart
