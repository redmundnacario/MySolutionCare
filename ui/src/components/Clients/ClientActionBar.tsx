import React from 'react'

import styles from "@styles/pages/Clients.module.css"
import Button from '@components/Common/Button'

import { useCreateClientActionsContext } from './actions/WithCreateClientActionsProvider'

type Props = {}

export const ClientActionBar = (props: Props) => {
  const { handleOpenModal } = useCreateClientActionsContext()

  return (
    <div className={styles.clientsActionBar}>
      <div>
        Searchbar
      </div>
      <Button 
        onClick={handleOpenModal}
      >Create new client</Button>
    </div>
  )
}