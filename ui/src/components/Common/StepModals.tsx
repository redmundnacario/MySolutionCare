import React, { useEffect, useState } from 'react'

import Modal from '@components/common/Modal';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader, Grid, InputLabel, Step, StepLabel, Stepper, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type StepModalViewType = {
  step: number;
  title: string;
  modalContentElement: JSX.Element;
  modalActionsElement: JSX.Element[];
  onClose: ()=> void;
}

type StepModalsPropsType = {
  steps: string[],
  data: StepModalViewType;
}

const StepModals = ({
  steps,
  data,
}: StepModalsPropsType) => {

  const {
    step,
    title,
    modalContentElement,
    modalActionsElement,
    onClose,
  } = data

  return <Modal>
      <>
    <ModalHeader  title ={title} onClose={onClose}/>
    <ModalContent 
      activeStep={step} 
      steps={steps} 
      modalContentElement={modalContentElement}/>
    <ModalActions 
      buttonElements={modalActionsElement}/>
      </>
  </Modal>
}

export default StepModals

const ModalHeader = ({title, onClose}: {
  title: string;
  onClose: () => void;
}) => {
  return <div className='flex justify-between'>
    <Typography variant="h5" component="div">
      {title}
    </Typography>
    <div onClick={onClose}>
      <CloseIcon className='text-gray-500'/>
    </div>
  </div>
}

const ModalContent = ({activeStep, steps , modalContentElement}:{
  activeStep: number;
  steps: string[];
  modalContentElement: JSX.Element
}) => {
  return <div>
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    {modalContentElement}

    {/* <Grid container >
      <Grid item xs={12}>
          <InputLabel
              shrink={false}
              htmlFor={"firstname"}
          >
              <Typography >First name</Typography>
          </InputLabel>

      <TextField
              id="firstname"
              fullWidth
              // margin="normal"
              // InputLabelProps={{
              //   shrink: true,
              // }}
              // InputProps={{
              //   classes: { input: classes.inputs },
              // }}
              // name="username"
              // autoComplete="username"
              // autoFocus
              // helperText={touched.username ? errors.username : ''}
              // error={touched.username && Boolean(errors.username)}
              // value={values.username}
              variant="outlined"
              // onChange={handleChange}
            />
      </Grid>
  </Grid>
  <Grid container >
    <Grid item xs={12}>
      <InputLabel
          shrink={false}
          htmlFor={"lastname"}
      >
          <Typography >Last name</Typography>
      </InputLabel>

      <TextField
              id="lastname"
              fullWidth
              // margin="normal"
              // InputLabelProps={{
              //   shrink: true,
              // }}
              // InputProps={{
              //   classes: { input: classes.inputs },
              // }}
              // name="username"
              // autoComplete="username"
              // autoFocus
              // helperText={touched.username ? errors.username : ''}
              // error={touched.username && Boolean(errors.username)}
              // value={values.username}
              variant="outlined"
              // onChange={handleChange}
            />
    </Grid>
  </Grid> */}
</div>
}


const ModalActions = ({buttonElements}:{ 
  buttonElements: JSX.Element[]
}) => {
  return <div className={`flex ${buttonElements.length > 1 ? "justify-between" : "justify-end"}`}>
    {buttonElements}
  </div>
}