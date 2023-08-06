import Button from '@components/common/Button';
import { SearchBar } from '@components/common/SearchBar';

import { useCreateClientActionsContext } from './actions/WithCreateClientActionsProvider';
import { useSearchClientActionsContext } from './actions/WithSearchClientActionsProvider';

export const ClientActionBar = () => {
	const { handleOpenModal } = useCreateClientActionsContext();
	const { searchTerm, handleChangeSearchTerm } = useSearchClientActionsContext();
	return (
		<div className='flex flex-col mt-6 gap-4 md:flex md:flex-row md:justify-between md:items-center'>
			<SearchBar handleChange={handleChangeSearchTerm} searchTerm={searchTerm} />
			<div className='flex justify-end'>
				<Button onClick={handleOpenModal}>Create new client</Button>
			</div>
		</div>
	);
};
