import useModal, { UseModalReturnType } from '@components/hooks/useModal';
import { Modal } from '@mui/material';
import React, { ReactElement, createContext, useContext } from 'react'

const GlobalModalContext =  createContext<UseModalReturnType | undefined>(undefined)

const WithGlobalModalProvider = ({children}:{children: ReactElement}) => {
  const {showModal, modalElement, setShowModal, setModal } = useModal()

  return (
    <GlobalModalContext.Provider
      value={{
        showModal, modalElement, setShowModal, setModal 
      }}
    >
      <>
        { children }

        {<Modal
          open={showModal}
          onClose={() =>setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ 
            "& > .MuiBackdrop-root" : {
                    backdropFilter: "blur(1px)",
                    backgroundColor: "transparent"
                  }
            }}
        > 
          <div>
            {modalElement}
          </div>
        </Modal>}
      </>
    </GlobalModalContext.Provider>
  )
}

export default WithGlobalModalProvider

export const useGlobalModalContext = () =>{
  const context = useContext(GlobalModalContext)

  if (!context){
    throw new Error("useGlobalModalContext has to be called in ClientActionsContext.Provider")
  }

  return context
}