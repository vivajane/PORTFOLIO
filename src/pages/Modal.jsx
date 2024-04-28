import React from 'react'
import "./modal.css"

const Modal = ({setShow}) => {
    const closeModal =() => {
        setShow(false)
      }
    
  return (
    <div className='modal-container'>
        <div className='modal'>
            <h2>Form submitted succesfully</h2>
            <button type='submit'onClick={closeModal}>Close</button>

        </div>

      
    </div>
  )
}

export default Modal
