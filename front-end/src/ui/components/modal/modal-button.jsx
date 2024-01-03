import React,{useState} from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './modal-content'
import './style-modal.css'

export default function ModalButton() {
  const [showModal, setShowModal]= useState(false)
  return (
    <>
    <button 
    onClick={()=>setShowModal(true)}
    className='button'>Open the modal</button>
    {showModal && createPortal(<ModalContent closeModal={()=>setShowModal(false)}/> ,document.body)}
    </>
  )
}

