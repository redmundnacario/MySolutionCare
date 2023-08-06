type ButtonPropsType = {
	children: string;
	icon?: JSX.Element;
	variant?: 'primary' | 'secondary';
	onClick: () => void;
};

const Button = ({ children, icon, variant = 'primary', onClick }: ButtonPropsType) => {
	const design = () => {
		switch (variant) {
			case 'primary':
				return 'bg-[#355fff] hover:bg-blue-700 text-white';
			case 'secondary':
				return 'bg-white hover:bg-gray-200 text-[#355fff]';
			default:
				return 'bg-[#355fff] hover:bg-blue-700 text-white';
		}
	};
	return (
		<button
			onClick={onClick}
			className={`${design()} flex items-center py-2 px-6 font-semibold rounded-lg text-base h-[3rem]`}
		>
			{' '}
			{icon && <div>{icon}&nbsp;</div>}
			{children}
		</button>
	);
};

export default Button;
