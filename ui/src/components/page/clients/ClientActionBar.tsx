import Button from '@components/common/Button'
import { SearchBar } from '@components/common/SearchBar'

import { useCreateClientActionsContext } from './actions/WithCreateClientActionsProvider'
import { useSearchClientActionsContext } from './actions/WithSearchClientActionsProvider'

export const ClientActionBar = () => {
  const { handleOpenModal } = useCreateClientActionsContext()
  const { searchTerm, handleChangeSearchTerm } = useSearchClientActionsContext()
  return (
    <div className="flex justify-between mt-6 items-center">
      <SearchBar handleChange={handleChangeSearchTerm} searchTerm={searchTerm} />
      <Button 
        onClick={handleOpenModal}
      >Create new client</Button>
    </div>
  )
}