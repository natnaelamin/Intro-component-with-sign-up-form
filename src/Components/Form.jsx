import React from 'react'

function Form({value, setValue, error, placeholder}) {

   const handleInputChange = (e) => {
    setValue(e.target.value)
   }
  return (
    <div className="relative">
        <input className={` ${error ? 'border-red-500':'border-slate-300'}   w-full  border px-5  md:py-3  py-2 rounded " type="text`}
        placeholder={placeholder} value={value}  onChange={handleInputChange}/>
        <img className={`absolute top-3 right-2 ${error ? '' : 'hidden'} `}  src="/images/icon-error.svg" alt="error icon" /> 
        <p className="text-red-500 text-sm  text-right mb-3 md:mb-5  ">{error}</p>
    </div>
  )
}

export default Form
