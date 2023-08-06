import React, { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';

export type UseModalReturnType = {
	showModal: boolean;
	modalElement: ReactElement | undefined;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setModal: (_modalElement: ReactElement) => void;
};

const useModal = (): UseModalReturnType => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [modalElement, setModalElement] = useState<ReactElement | undefined>(undefined);

	useEffect(() => {
		if (!showModal) {
			setModalElement(undefined);
		}
	}, [showModal]);

	const setModal = (_modalElement: ReactElement) => {
		setModalElement(_modalElement);
		setShowModal(true);
	};

	return {
		showModal,
		modalElement,
		setShowModal,
		setModal,
	};
};

export default useModal;
