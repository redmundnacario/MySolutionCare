import React from 'react'

import styles from "@styles/pages/Clients.module.css"
import Button from '@components/common/Button'
import { SearchBar } from '@components/common/SearchBar'

import { useCreateClientActionsContext } from './actions/WithCreateClientActionsProvider'
import { useSearchClientActionsContext } from './actions/WithSearchClientActionsProvider'

type Props = {}

export const ClientActionBar = (props: Props) => {
  const { handleOpenModal } = useCreateClientActionsContext()
  const { handleChangeSearchTerm } = useSearchClientActionsContext()
  return (
    <div className={styles.clientsActionBar}>
      <SearchBar handleChange={handleChangeSearchTerm} />
      <Button 
        onClick={handleOpenModal}
      >Create new client</Button>
    </div>
  )
}