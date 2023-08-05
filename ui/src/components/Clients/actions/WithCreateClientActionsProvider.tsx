import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react'

import { useGlobalModalContext } from '@components/hoc/WithGlobalModalProvider';
import Button from '@components/Common/Button';
import StepModals from '@components/Common/StepModals';

type ClientActionsContextType = {
  handleOpenModal: () => void;
}
const CreateClientActionsContext =  createContext<ClientActionsContextType | undefined>(undefined)

const STEPS = [
  "Personal details", "Contact details"
]

const WithCreateClientActionsProvider = ({children}:{children: ReactElement}) => {
  const [activeStep, setActiveStep] = useState<number | undefined>(undefined)

  const { showModal, setModal, setShowModal } = useGlobalModalContext()

  const onNextStep = () => {
    if (activeStep !== undefined){
      setActiveStep(activeStep + 1)
    }
  }

  const onPreviousStep = () =>{
    if (activeStep !== undefined){
      setActiveStep(activeStep - 1)
    }
  }

  const onSaveClient = () => {
    console.log("saving client")
  }

  // Render data
  const DATA = [
    {
      step: 0,
      title: "Create new client",
      modalContentElement: <div>hello</div>,
      modalActionsElement: [<Button key={1} onClick={onNextStep}>Continue</Button>],
      onClose: () => setShowModal(false)
    },
    {
      step: 1,
      title: "Create new client",
      modalContentElement: <div>hello</div>,
      modalActionsElement: [
        <Button key={1} onClick={onPreviousStep}>Back</Button>,
        <Button key={2} onClick={onSaveClient}>Save</Button>],
      onClose: () => setShowModal(false),
    }
  ]

  const handleOpenModal = () => {
    setActiveStep(0)
  }

  // Sets Modal content when active step changes
  useEffect(() => {
    if(activeStep !== undefined){
      setModal(<StepModals
        steps={STEPS}
        data={DATA[activeStep]} /> )
      console.log(DATA[activeStep])
    }
  },[ activeStep ])

  // resets active step when modal is not present
  useEffect(() => {
    if( !showModal){
      setActiveStep(undefined)
    }
  },[showModal])

  return (
    <CreateClientActionsContext.Provider
      value={{
        handleOpenModal,
      }}
    >{children}</CreateClientActionsContext.Provider>
  )
}

export default WithCreateClientActionsProvider

export const useCreateClientActionsContext = () =>{
  const context = useContext(CreateClientActionsContext)

  if (!context){
    throw new Error("useCreateClientActionsContext has to be called in CreateClientActionsContext.Provider")
  }

  return context
}

