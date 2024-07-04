import React from 'react'
import { useForm } from 'react-hook-form';
import { ReactComponent as ArrowRightSvg } from "../../assets/icons/arrow-right-long-svgrepo-com.svg";
import { useDispatch } from 'react-redux';
import { setAddress } from "../../store/slices/addressSlice"
import Input from './Input';
import Button from './Button';

function AddressForm({ onTabSwitch }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(setAddress(data));
        onTabSwitch('payment');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='md:w-2/3 md:mx-auto px-3 pt-1'>
            <h3 className="pt-4 text-2xl md:text-center">Delivery Address</h3>
            <div className='mb-4'>
                <Input
                    label='Street Address'
                    labelClassname='block mb-2 text-sm font-bold text-gray-700'
                    className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                    placeholder='Street Address'
                    {
                    ...register("address", { required: true, })
                    }
                />
                {errors.address && <span className='text-red-500'>"This field is required"</span>}
            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <Input
                        label='City'
                        labelClassname='block mb-2 text-sm font-bold text-gray-700'
                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                        placeholder='City'
                        {
                        ...register("city")
                        }
                    />
                </div>
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <Input
                        label='State'
                        labelClassname='block mb-2 text-sm font-bold text-gray-700'
                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                        placeholder='state'
                        {
                        ...register("state")
                        }
                    />
                </div>

            </div>
            <div className="mb-4 md:flex md:justify-between">
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <Input
                        label='Country'
                        labelClassname='block mb-2 text-sm font-bold text-gray-700'
                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                        placeholder='Country'
                        {
                        ...register("country")
                        }
                    />
                </div>
                <div className='mb-4 md:mr-2 md:mb-0 flex-1'>
                    <Input
                        label='Postal Code'
                        labelClassname='block mb-2 text-sm font-bold text-gray-700'
                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border roundedn shadow appearance-none focus:outline-none focus:shadow-outline'
                        placeholder='postal code'
                        {
                        ...register("postalCode")
                        }
                    />
                </div>
            </div>
            <div className='flex justify-end p-2'>
            <Button variant="dark" className="flex items-center" type="submit" size='medium'><span className="mr-1">Next</span><ArrowRightSvg /></Button>
            </div>

        </form>
    )
}

export default AddressForm
