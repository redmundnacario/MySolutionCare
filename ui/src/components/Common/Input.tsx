import React from 'react';

import { InputAdornment, InputLabel, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type InputPropsType = {
	label: string;
	value: string;
	fieldName: string;
	labelOff: boolean;
	isSearch?: boolean;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

const Input = ({ label, value, fieldName, labelOff, isSearch = false, placeholder, onChange }: InputPropsType) => {
	return (
		<div>
			{!labelOff && (
				<InputLabel shrink={false} htmlFor={fieldName}>
					<Typography variant='body2'>{label}</Typography>
				</InputLabel>
			)}

			<TextField
				defaultValue={value}
				id={fieldName}
				fullWidth
				name={fieldName}
				InputLabelProps={{ shrink: labelOff ? false : true }}
				variant='outlined'
				onChange={(event) => onChange(event)}
				type={isSearch ? 'search' : undefined}
				placeholder={placeholder}
				InputProps={{
					sx: { height: 40, backgroundColor: 'white', ...(isSearch && { borderRadius: '0.5rem' }) },
					endAdornment: isSearch ? (
						<InputAdornment position='end'>
							<SearchIcon />
						</InputAdornment>
					) : undefined,
				}}
			/>
		</div>
	);
};

export default Input;
