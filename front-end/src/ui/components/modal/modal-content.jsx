import React from 'react'
import ModalButton from './modal-button';
import './style-modal.css'

export default function ModalContent({closeModal}) {
  return (
    <>
    
    <div className='modal'>
    <div className='close' onClick={closeModal}>X</div>
        

    
    </div>
    
    </>
    
  )
}
