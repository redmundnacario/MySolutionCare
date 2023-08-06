import Modal from '@components/common/Modal';

import CloseIcon from '@mui/icons-material/Close';
import { Step, StepLabel, Stepper } from '@mui/material';
import Typography from '@mui/material/Typography';

type StepModalViewType = {
	step: number;
	title: string;
	modalContentElement: JSX.Element;
	modalActionsElement: JSX.Element[];
	onClose: () => void;
};

type StepModalsPropsType = {
	steps: string[];
	data: StepModalViewType;
};

const StepModals = ({ steps, data }: StepModalsPropsType) => {
	const { step, title, modalContentElement, modalActionsElement, onClose } = data;

	return (
		<Modal>
			<>
				<ModalHeader title={title} onClose={onClose} />
				<ModalContent activeStep={step} steps={steps} modalContentElement={modalContentElement} />
				<ModalActions buttonElements={modalActionsElement} />
			</>
		</Modal>
	);
};

export default StepModals;

const ModalHeader = ({ title, onClose }: { title: string; onClose: () => void }) => {
	return (
		<div className='flex justify-between mb-4'>
			<Typography variant='h5' component='div'>
				{title}
			</Typography>
			<div onClick={onClose}>
				<CloseIcon className='text-gray-500' />
			</div>
		</div>
	);
};

const ModalContent = ({
	activeStep,
	steps,
	modalContentElement,
}: {
	activeStep: number;
	steps: string[];
	modalContentElement: JSX.Element;
}) => {
	return (
		<div className='mb-4'>
			<div className='mb-4'>
				<Stepper activeStep={activeStep}>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
			</div>
			{modalContentElement}
		</div>
	);
};

const ModalActions = ({ buttonElements }: { buttonElements: JSX.Element[] }) => {
	return (
		<div className={`flex mt-[3rem] ${buttonElements.length > 1 ? 'justify-between' : 'justify-end'}`}>
			{buttonElements}
		</div>
	);
};
