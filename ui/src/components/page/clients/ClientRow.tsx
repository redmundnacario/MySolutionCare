import { TableCell, TableRow } from '@mui/material';
import { IClient } from '@models/application';

export interface IProps {
	client: IClient;
}

export const ClientRow = ({ client }: IProps) => {
	const { id, firstName, lastName, email, phoneNumber } = client;

	return (
		<TableRow
			key={id}
			sx={{
				'&:last-child td, &:last-child th': { border: 0 },
				cursor: 'pointer',
				'&:hover': {
					backgroundColor: '#f5f5f5',
				},
			}}
		>
			<TableCell component='th' scope='row' sx={{ color: '#355fff' }}>
				{firstName} {lastName}
			</TableCell>
			<TableCell>{phoneNumber}</TableCell>
			<TableCell>{email}</TableCell>
		</TableRow>
	);
};
