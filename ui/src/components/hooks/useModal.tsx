import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react'

import { Box, Modal, Typography } from '@mui/material'

export type UseModalReturnType = {
  showModal: boolean;
  modalElement: ReactElement| undefined;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setModal:(_modalElement: ReactElement) => void
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const useModal = (): UseModalReturnType => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalElement, setModalElement] = useState<ReactElement| undefined>(undefined)

  useEffect(() =>{
    if (!showModal){
      setModalElement(undefined)
    }  
  },[showModal])

  // useEffect(() =>{
  //   if (modalElement){
  //     setShowModal(true)
  //   }  
  // },[modalElement])

  const setModal = (_modalElement: ReactElement) => {
    setModalElement(_modalElement)
    setShowModal(true)
  }

  console.log(showModal, modalElement)

  return {
    showModal,
    modalElement,
    setShowModal,
    setModal
  }
}

export default useModal