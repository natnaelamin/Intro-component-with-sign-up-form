import React from 'react'

function Button({handleSubmit}) {
  return (
    <>
      <button onClick={handleSubmit} className="bg-green-400 hover:bg-green-300 w-full py-3
        text-white font-bold rounded-md mb-2 md:mb-5">Claim your free trial</button>
      <p className="text-slate-400 text-sm font-semibold text-center md:text-start">
        By clicking the button, you are agreeing to our <span className="text-red-400">Terms and Services</span></p>
    </>
  )
}

export default Button
