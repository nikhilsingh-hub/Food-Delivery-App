import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    labelClassname = '',
    type = 'text',
    className = '',
    ...props
}, ref) {

    const id = useId();
  return (
    <div className='w-full'>
      {
        label && <label htmlFor={id} className={labelClassname}>{label}</label>
      }
      <input type="text" 
      className={className}
      id={id}
      ref={ref}
      {...props}
      />
    </div>
  )
})

export default Input
