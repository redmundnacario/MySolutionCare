import React, { ReactElement, createContext, useCallback, useContext, useEffect, useState } from 'react';

import { useDebounce } from '@components/hooks/useDebounce';
import { IClient } from '@models/application';
import { StateContext } from '@store/DataProvider';

type ClientActionsContextType = {
	searchTerm: string | undefined;
	filteredClients: IClient[];
	handleChangeSearchTerm: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

const SearchClientActionsContext = createContext<ClientActionsContextType | undefined>(undefined);

const WithSearchClientActionsProvider = ({ children }: { children: ReactElement }) => {
	const { clients } = useContext(StateContext).state;

	const [filteredClients, setFilteredClients] = useState<IClient[]>([]);
	const [searchTerm, setSearchTerm] = useState<string | undefined>(undefined);
	const debouncedSearchTerm = useDebounce(searchTerm, 500) as string | undefined;

	const filterClientsByName = useCallback(() => {
		const filteredItems: IClient[] = [];
		clients.forEach((item) => {
			// Convert both the item name and the search term to lowercase for case-insensitive search
			const itemFirstName = item.firstName.toLowerCase();
			const itemLastName = item.lastName.toLowerCase();
			const itemFullName = `${itemFirstName} ${itemLastName}`;
			const itemReverseFullName = `${itemLastName} ${itemFirstName}`;
			const searchTermLower = searchTerm!.toLowerCase();

			// Check if the item name contains the search term
			if (
				itemFirstName.includes(searchTermLower) ||
				itemLastName.includes(searchTermLower) ||
				itemFullName.includes(searchTermLower) ||
				itemReverseFullName.includes(searchTermLower)
			) {
				filteredItems.push(item);
			}
		});

		return filteredItems;
	}, [searchTerm, clients]);

	const handleSearchFilter = () => {
		setFilteredClients(filterClientsByName());
	};

	const handleChangeSearchTerm = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	// sync filtered clients and clients from store
	useEffect(() => {
		setFilteredClients(clients);
	}, [clients]);

	// Run filtering when debounceSearchTerm changes
	useEffect(() => {
		if (debouncedSearchTerm === undefined) {
			return;
		}

		if (debouncedSearchTerm === '') {
			setFilteredClients(clients);
		} else {
			handleSearchFilter();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchTerm]);

	return (
		<SearchClientActionsContext.Provider
			value={{
				searchTerm,
				filteredClients,
				handleChangeSearchTerm,
			}}
		>
			{children}
		</SearchClientActionsContext.Provider>
	);
};

export default WithSearchClientActionsProvider;

export const useSearchClientActionsContext = () => {
	const context = useContext(SearchClientActionsContext);

	if (!context) {
		throw new Error('useSearchClientActionsContext has to be called in SearchClientActionsContext.Provider');
	}

	return context;
};
