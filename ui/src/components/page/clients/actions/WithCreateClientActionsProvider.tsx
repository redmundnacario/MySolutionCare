import React, { ReactElement, createContext, useContext, useEffect, useState } from 'react'

import { useGlobalModalContext } from '@components/hoc/WithGlobalModalProvider';
import Button from '@components/common/Button';
import StepModals from '@components/common/StepModals';
import Input from '@components/common/Input';
import { createClient } from '@services/api';

type ClientActionsContextType = {
  handleOpenModal: () => void;
}
const CreateClientActionsContext =  createContext<ClientActionsContextType | undefined>(undefined)

const STEPS = [
  "Personal details", "Contact details"
]

type ClientFormType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const initialFormValue = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
}

const WithCreateClientActionsProvider = ({children}:{children: ReactElement}) => {
  const { showModal, setModal, setShowModal } = useGlobalModalContext()

  const [activeStep, setActiveStep] = useState<number | undefined>(undefined)
  const [ formData, setFormData ] = useState<ClientFormType >(initialFormValue)

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

  const onChangeInput = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
    const {value, name} = event.target
    setFormData((prev) => {
      return {...prev, [name]: value}
    })
  }

  const onSaveClient = () => {
    createClient({
      // id: generateRandomId(5),
      id:"",
      ...formData
    })
    // .then((clients) =>
    //   // dispatch({ type: "FETCH_ALL_CLIENTS", data: clients })
    // );
  }

  // Render data
  const renderElements =[
    {
      step: 0,
      title: "Create new client",
      modalContentElement: <PersonalDetailsForm onChange={onChangeInput} />,
      modalActionsElement: [<Button key={1} onClick={onNextStep}>Continue</Button>],
      onClose: () => setShowModal(false)
    },
    {
      step: 1,
      title: "Create new client",
      modalContentElement: <ContactDetailsForm onChange={onChangeInput}/>,
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
        data={renderElements[activeStep]} /> )
    }
  },[ activeStep, formData ])

  // resets active step when modal is not present
  useEffect(() => {
    if( !showModal){
      setActiveStep(undefined)
      setFormData(initialFormValue)
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


const PersonalDetailsForm = ({
  onChange
}:{
  onChange:(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}) => {
  return <>
    <Input label="First Name" fieldName='firstName' onChange={onChange} labelOff={false}/>
    <Input label="Last Name" fieldName='lastName' onChange={onChange} labelOff={false}/>
  </>
}

const ContactDetailsForm = ({
  onChange
}:{
  onChange:(event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}) => {
  return <>
    <Input label="Email" fieldName='email' onChange={onChange} labelOff={false}/>
    <Input label="Phone Number" fieldName='phoneNumber' onChange={onChange} labelOff={false}/>
  </>
}


