import React from 'react'

function Modal({handleClose, isVisible}) {
    if(!isVisible) return null;

    
  return (
    <div className=' fixed inset-0 bg-slate-900 bg-cover h-screen px-5 md:px-96 py-36 md:py-48 '>
      <div className='bg-red-400 py-9 px-5 rounded-xl'>
        <h3 className='md:text-5xl text-3xl text-white font-bold text-center'>Successful!</h3>
        <p className='text-white text-xl my-5 text-center'>Now you can start your free trial.</p>
        <div className='flex justify-center'>
        <button className='bg-green-400 hover:bg-green-300 px-10
          py-2  text-xl text-white font-bold rounded-xl mb-2 md:mb-5' onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
