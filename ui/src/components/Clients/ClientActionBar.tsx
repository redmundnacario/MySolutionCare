import React from 'react'

import styles from "@styles/pages/Clients.module.css"

type Props = {}

export const ClientActionBar = (props: Props) => {
  return (
    <div className={styles.clientsActionBar}>
      <div>
        Searchbar
      </div>
      <div>Create new client</div>
    </div>
  )
}